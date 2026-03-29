import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Md Sadikur Rahman — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "16px",
            background: "rgba(51, 65, 85, 0.6)",
            border: "2px solid rgba(34, 211, 238, 0.3)",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "36px",
              fontWeight: 700,
              background: "linear-gradient(135deg, #67e8f9, #93c5fd, #67e8f9)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            SR
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "#ffffff",
            margin: "0 0 12px 0",
            letterSpacing: "-1px",
          }}
        >
          Md Sadikur Rahman
        </h1>

        {/* Title */}
        <p
          style={{
            fontSize: "28px",
            fontWeight: 500,
            background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
            backgroundClip: "text",
            color: "transparent",
            margin: "0 0 32px 0",
          }}
        >
          Software Developer
        </p>

        {/* Tech stack */}
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 20px",
                borderRadius: "8px",
                background: "rgba(51, 65, 85, 0.5)",
                border: "1px solid rgba(100, 116, 139, 0.3)",
                color: "#cbd5e1",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Location */}
        <p
          style={{
            fontSize: "18px",
            color: "#64748b",
            marginTop: "24px",
          }}
        >
          Sydney, Australia
        </p>
      </div>
    ),
    { ...size }
  );
}
