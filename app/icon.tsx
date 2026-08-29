import { ImageResponse } from "next/og";

export const size = { width: 128, height: 128 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#151515" }}>
        <div style={{ width: 92, height: 92, borderRadius: 22, background: "linear-gradient(145deg, #3B82F6, #284293)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", boxShadow: "0 0 40px rgba(59,130,246,.45)" }}>
          <svg width="62" height="62" viewBox="0 0 64 64" fill="none">
            <path d="M21 18h-6v28h6" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43 18h6v28h-6" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M32 15v34" stroke="#DCE8FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 7" />
            <path d="M17 39c7-8 12-10 16-6 4 4 9 2 15-8" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    ),
    size
  );
}
