import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/lib/portfolio";
import "./globals.css";
import { isPreview, pageMetadata, siteUrl } from "@/lib/site";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});
const mono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  ...pageMetadata(
    "Ashutosh Yadav — Frontend Engineer",
    profile.introduction,
    "/",
  ),
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ashutosh Yadav — Frontend Engineer",
    template: "%s — Ashutosh Yadav",
  },
  applicationName: "Ashutosh Yadav Portfolio",
  authors: [{ name: profile.name }],
  robots: { index: !isPreview, follow: !isPreview },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${mono.variable}`}>
        <ThemeProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: profile.name,
                url: siteUrl,
                "@id": `${siteUrl}/#person`,
                jobTitle: profile.role,
                sameAs: [profile.github, profile.linkedin],
                knowsAbout: [
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Frontend architecture",
                  "Insurance technology",
                ],
              }).replace(/</g, "\u003c"),
            }}
          />
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
