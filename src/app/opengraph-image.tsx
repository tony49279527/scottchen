import { ImageResponse } from "next/og";

export const alt = "SCOTTCHEN OEM abrasive, sanding and polishing solutions";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 80% 20%, #7c2d12 0, #111827 34%, #070a13 72%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 80px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}>
          <div
            style={{
              color: "#fb923c",
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 5,
              marginBottom: 30,
            }}
          >
            B2B SOURCING AND PRIVATE LABEL
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Abrasive, Sanding and Polishing Accessory Kits
          </div>
          <div style={{ color: "#cbd5e1", display: "flex", fontSize: 28, marginTop: 28 }}>
            OEM configurations, retail packaging and batch quality control.
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            border: "4px solid #fb923c",
            borderRadius: 36,
            display: "flex",
            flexDirection: "column",
            height: 250,
            justifyContent: "center",
            transform: "rotate(2deg)",
            width: 250,
          }}
        >
          <div style={{ display: "flex", fontSize: 35, fontWeight: 900 }}>SCOTT</div>
          <div style={{ color: "#fb923c", display: "flex", fontSize: 35, fontWeight: 900 }}>
            CHEN
          </div>
          <div style={{ color: "#94a3b8", display: "flex", fontSize: 16, marginTop: 18 }}>
            GRIND · SAND · POLISH
          </div>
        </div>
      </div>
    ),
    size
  );
}
