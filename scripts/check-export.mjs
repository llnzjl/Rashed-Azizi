import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("out");
const prefix = "/Rashed-Azizi";
const routes = [
  "",
  "about",
  "projects",
  "education",
  "experience",
  "blog",
  "impossiblelist",
  "cv",
  "contact",
];
const resources = new Set();

for (const route of routes) {
  const html = await readFile(path.join(root, route, "index.html"), "utf8");
  assert.match(html, /<h1[\s>]/, `${route || "Home"} needs a primary heading`);
  assert.match(
    html,
    /<title>[^<]*Rashed Azizi/,
    `${route || "Home"} needs a branded title`,
  );
  assert.match(
    html,
    /rel="canonical" href="https:\/\/llnzjl.github.io\/Rashed-Azizi/,
    "Canonical URL needs the repository path",
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
