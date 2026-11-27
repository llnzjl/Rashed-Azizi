import { Snowfall } from "@/components/site/snowfall";
import { SiteExperience } from "@/components/site/site-experience";
import { PageTransition } from "@/components/site/page-transition";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { LocaleProvider } from "@/lib/i18n/client";
import { languages, type Locale } from "@/lib/i18n/locales";
import { getMessages } from "@/lib/i18n/messages";
import { translate } from "@/lib/i18n/translate";
import { siteData } from "@/data/portfolio";

import "@/app/globals.css";

export function SiteLayout({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const messages = getMessages(locale);

  return (
    <html
      lang={locale}
      dir={languages[locale].direction}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href={siteData.favicon} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{document.documentElement.dataset.theme=localStorage.getItem('ra-theme')==='light'?'light':'dark'}catch(e){}})()",
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          {translate(messages, "Skip to content")}
        </a>
        <LocaleProvider locale={locale} messages={messages}>
          <SiteExperience>
            <Snowfall />
            <SiteHeader />
            <PageTransition>
              <main id="main-content" tabIndex={-1}>
                {children}
              </main>
            </PageTransition>
            <SiteFooter />
          </SiteExperience>
        </LocaleProvider>
      </body>
    </html>
  );
}
