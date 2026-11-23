import type { Metadata } from "next";

// Existing production URL supplied by the owner; do not derive canonicals from preview hosts.
export const siteUrl = "https://ashutoshyadev.vercel.app";
export const isPreview = process.env.VERCEL_ENV === "preview";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: new URL(path, siteUrl).href },
    openGraph: {
      title,
      description,
      url: new URL(path, siteUrl).href,
      type: "website",
      siteName: "Ashutosh Yadav",
      locale: "en_IN",
      images: [
        {
          url: `${siteUrl}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Ashutosh Yadav — Frontend Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/opengraph-image`],
    },
  };
}
