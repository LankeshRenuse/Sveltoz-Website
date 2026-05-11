export default function BackgroundFX() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071426] to-black"></div>

      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.05) 0.0625rem, transparent 0.0625rem),
            linear-gradient(90deg, rgba(0,255,255,0.05) 0.0625rem, transparent 0.0625rem)
          `,
          backgroundSize: "3.125rem 3.125rem"
        }}
      ></div>

    </div>
  );
}