import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SCOTTCHEN B2B Surface Finishing",
    short_name: "SCOTTCHEN",
    description:
      "OEM abrasive, sanding and polishing accessory kits for brands and distributors.",
    start_url: "/",
    display: "standalone",
    background_color: "#070a13",
    theme_color: "#c2410c",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
