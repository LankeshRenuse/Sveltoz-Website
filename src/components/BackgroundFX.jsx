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
        rgba(7, 1, 28, 0.25),
        transparent 40%
      ),

      linear-gradient(
        to bottom,
        #010712cd 0%,
        #010712 45%,
        #010712 100%
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
      rgba(0, 255, 157, 0.03) 0.0525rem,
      transparent 0.0525rem
    ),

    linear-gradient(
      90deg,
      rgba(0, 255, 157, 0.03) 0.0525rem,
      transparent 0.0525rem
    )
  `,

  backgroundSize: "3.125rem 3.125rem"
}}
      ></div>

    </div>
  );
}