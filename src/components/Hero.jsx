export default function Hero() {

  return (

    
    <section className="hero">

      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/entry-vid.mp4" type="video/mp4" />
      </video>

      <div className="phone-hero-brand">
        <img
          src="/logo-without-name.png"
          alt="Sveltoz"
          className="phone-hero-logo"
        />
        <h1 className="phone-hero-title">
          <span>S</span>veltoz
        </h1>
      </div>

       <div className="absolute inset-0 flex items-center justify-center px-4 z-10"> 

               <div className="max-w-6xl w-full text-center mx-auto"></div>

               </div>

    </section>
  );
}
