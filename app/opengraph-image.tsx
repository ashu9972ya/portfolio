import { ImageResponse } from "next/og";
export const alt =
  "Ashutosh Yadav — Frontend Engineer specializing in React.js, Next.js and TypeScript";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function SocialPreview() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 70,
        background: "#f7f7f2",
        color: "#252820",
      }}
    >
      <div style={{ display: "flex", fontSize: 26 }}>
        REACT.JS · NEXT.JS · TYPESCRIPT
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 76, fontWeight: 700 }}>Ashutosh Yadav</div>
        <div style={{ fontSize: 54, marginTop: 18 }}>Frontend Engineer</div>
      </div>
      <div
        style={{
          display: "flex",
          background: "#d2ee6d",
          padding: "20px 28px",
          fontSize: 25,
        }}
      >
        Insurance technology · Reusable frontend architecture
      </div>
    </div>,
    size,
  );
}
