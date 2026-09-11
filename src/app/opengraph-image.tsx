import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { brand } from "@/config/site";

export const alt = `${brand.name} · ${brand.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen para compartir en redes (1200x630), generada en build a partir del logo oficial. */
export default async function OpenGraphImage() {
  const logo = await readFile(
    path.join(process.cwd(), "public", "brand", "kurimba-logo-horizontal.png"),
  );
  const src = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4efe7",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "62% 38% 46% 54% / 55% 45% 55% 45%",
            background: "#e3e8de",
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -140,
            width: 560,
            height: 560,
            borderRadius: "40% 60% 55% 45% / 50% 40% 60% 50%",
            background: "#eae2d5",
          }}
        />
        <img src={src} alt="" width={1140} height={450} style={{ objectFit: "contain" }} />
        <div
          style={{
            position: "absolute",
            bottom: 44,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            fontSize: 26,
            letterSpacing: 2,
            color: "#8a8178",
          }}
        >
          {brand.slogan}
        </div>
      </div>
    ),
    size,
  );
}
