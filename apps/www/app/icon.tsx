import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="24"
          height="24"
        >
          <path
            d="M12 3L21 8V16L12 21L3 16V8L12 3Z"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M12 8V17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7"
            fill="white"
          />
          <circle cx="8" cy="12" r="1.5" fill="white" />
        </svg>
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}
