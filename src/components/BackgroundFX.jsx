export default function BackgroundFX() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      
      {/* Gradient background */}
<div
  className="absolute inset-0"
  style={{
    background: `
      radial-gradient(
        circle at top center,
        rgba(2, 0, 10, 0.96),
        transparent 40%
      ),

      linear-gradient(
        to bottom,
        #02061a 0%,
        #020a18 45%,
        #01050c 100%
      )
    `
  }}
></div>

      {/* Grid lines */}
      <div
        className="absolute inset-0"
      style={{
  backgroundImage: `
    linear-gradient(
      rgba(0,255,156,0.05) 0.0625rem,
      transparent 0.0625rem
    ),

    linear-gradient(
      90deg,
      rgba(0,255,156,0.05) 0.0625rem,
      transparent 0.0625rem
    )
  `,

  backgroundSize: "3.125rem 3.125rem"
}}
      ></div>

    </div>
  );
}