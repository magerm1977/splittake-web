import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = "SplitTake. Record your screen. Stay on camera.";

export async function OgImage() {
  const icon = await readFile(join(process.cwd(), "src/images/app-icon.png"));
  const src = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#090909",
          color: "#f6f1ea",
          padding: "72px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={210}
          height={210}
          style={{ borderRadius: 46 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 64,
            maxWidth: 740,
          }}
        >
          <div style={{ fontSize: 28, color: "#cfc3b8" }}>For iPhone</div>
          <div
            style={{
              fontSize: 74,
              fontWeight: 600,
              letterSpacing: -2,
              marginTop: 10,
              lineHeight: 1,
            }}
          >
            SplitTake
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.3,
              marginTop: 18,
            }}
          >
            Record your screen. Stay on camera.
          </div>
          <div
            style={{
              width: 112,
              height: 6,
              borderRadius: 99,
              marginTop: 28,
              background: "linear-gradient(90deg, #ffb089, #ff5c3a, #ff3d78)",
            }}
          />
          <div style={{ marginTop: 26, fontSize: 22, color: "#cfc3b8" }}>
            splittake.app
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
