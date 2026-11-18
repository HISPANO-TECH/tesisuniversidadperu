import type { Metadata } from "next";
import type { University } from "./types";
import { ucv } from "./ucv";
import { pucp } from "./pucp";
import { upc } from "./upc";
import { utp } from "./utp";
import { unmsm } from "./unmsm";
import { usmp } from "./usmp";
import { usil } from "./usil";
import { unsa } from "./unsa";

export const UNIVERSITIES: University[] = [ucv, pucp, upc, utp, unmsm, usmp, usil, unsa];

export function uniMetadata(u: University): Metadata {
  const path = `/${u.slug}/`;
  return {
    title: u.seo.title,
    description: u.seo.description,
    alternates: { canonical: path },
    openGraph: {
      title: u.seo.title,
      description: u.seo.description,
      url: path,
      images: [{ url: u.hero.image.src, alt: u.hero.image.alt }],
    },
  };
}
