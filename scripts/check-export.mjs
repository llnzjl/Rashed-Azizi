import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const prefix = "/Rashed-Azizi";
const pages = JSON.parse(await readFile("src/lib/i18n/routes.json", "utf8"));
const directions = { en: "ltr", ko: "ltr", ps: "rtl", fa: "rtl" };
const languages = Object.keys(directions);
const routes = languages.flatMap((locale) =>
  pages.map(({ route }) => ({
    locale,
    route,
    directory: [locale === "en" ? "" : locale, route].filter(Boolean).join("/"),
  })),
);
const resources = new Set();

for (const { locale, route, directory } of routes) {
  const html = await readFile(path.join(root, directory, "index.html"), "utf8");
  assert.match(
    html,
    /<h1[\s>]/,
    `${directory || "Home"} needs a primary heading`,
  );
  assert(
    html.includes(`<html lang="${locale}" dir="${directions[locale]}"`),
    `Incorrect document language or direction for ${directory || "Home"}`,
  );
  assert.match(
    html,
    /<title>[^<]*Rashed Azizi/,
    `${directory || "Home"} needs a branded title`,
  );
  const deployment = `https://llnzjl.github.io${prefix}/`;
  const canonical = deployment + (directory ? directory + "/" : "");
  assert(
    html.includes(`rel="canonical" href="${canonical}"`),
    `Missing canonical URL ${canonical}`,
  );
  for (const language of languages) {
    const alternate = [language === "en" ? "" : language, route]
      .filter(Boolean)
      .join("/");
    const url = deployment + (alternate ? alternate + "/" : "");
    assert(
      html.includes(`hrefLang="${language}" href="${url}"`),
      `Missing language alternate ${url}`,
    );
  }
  assert(
    html.includes('class="snowfall" aria-hidden="true"'),
    `Missing snowfall on ${canonical}`,
  );
  assert(
    html.includes('class="snow-capped"'),
    `Missing menu snow on ${canonical}`,
  );
  for (const match of html.matchAll(
    /(?:src|href)="(\/[^"?#]+)(?:[?#][^"]*)?"/g,
  )) {
    const url = match[1];
    assert(
      url === prefix || url.startsWith(prefix + "/"),
      `Missing base path on ${url}`,
    );
    resources.add(url);
  }
}

for (const resource of resources) {
  let file = path.join(root, decodeURIComponent(resource.slice(prefix.length)));
  const info = await stat(file).catch(() => null);
  assert(info, `Missing exported resource: ${resource}`);
  if (info.isDirectory()) file = path.join(file, "index.html");
  await stat(file);
}

const home = await readFile(path.join(root, "index.html"), "utf8");
for (const project of ["baraka.uz", "dayflow", "KAA"]) {
  assert(
    home.includes(`https://llnzjl.github.io/${project}/`),
    `Missing live project: ${project}`,
  );
}
console.log(
  `Verified ${routes.length} routes, ${resources.size} local resources, metadata, and live project links under ${prefix}/.`,
);
