export default function Hero() {
  return (
    <section id="home" className="hero">
      
      <video
        className="hero-banner"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/entry-vid.mp4" type="video/mp4" />
      </video>

    </section>
  );
}