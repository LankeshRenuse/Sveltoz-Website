export default function About() {
  return (
    <section
      id="about"
      className=" py-10 md:py-4 px-4 md:px-8 lg:px-12 bg-[url('/bg.jpg')] bg-cover bg-center"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-10 items-center">

        {/* LEFT SIDE - ABOUT */}
        <div className="space-y-5 md:space-y-6 text-center md:text-left">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest font-bold leading-tight">
            <span className="text-white">ABOUT </span>
            <span className="text-[#22c55e]">SVELTOZ</span>
          </h2>

          <h3 className="text-lg md:text-xl lg:text-2xl text-white font-semibold">
            Innovating the Future
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg max-w-xl mx-auto md:mx-0">
            At <b className="text-white">Sveltoz</b>, we are a next-generation technology
            company driving innovation at the intersection of{" "}
            <b className="text-white">AI, Machine Learning, Drone Engineering</b>,
            and <b className="text-white">Digital Transformation</b>.
          </p>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg max-w-xl mx-auto md:mx-0">
            Our vision is to empower businesses to scale intelligently — building
            solutions that are{" "}
            <span className="text-[#22c55e]">smart, secure, and sustainable</span>.
            We turn complex challenges into measurable impact.
          </p>

        </div>

        {/* RIGHT SIDE - APPROACH CARD */}
       <div className="  glow-target bg-white/1 backdrop-blur-lg border border-[#22c55e]/20 rounded-2xl p-8 shadow-xl">

          <h3 className="text-xl md:text-2xl lg:text-3xl text-[#22c55e] mb-4 font-semibold text-center md:text-left">
            <span className="text-white">Our </span>
            <span className="text-[#22c55e]">Approach</span>
          </h3>

          <p className="text-gray-300 mb-5 md:mb-6 leading-relaxed text-sm md:text-base lg:text-lg text-center md:text-left">
            We follow a{" "}
            <span className="text-white font-semibold">
              human-first, innovation-driven
            </span>{" "}
            approach where technology empowers{" "}
            <span className="text-[#22c55e]">
              growth, efficiency, and transformation
            </span>.
          </p>

          <ul className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base lg:text-lg">

            <li className="flex gap-3 items-start">
              <span className="text-[#22c55e] mt-1 text-3xl">▸</span>
              <span>AI-powered solutions for real-world impact</span>
            </li>

            <li className="flex gap-3 items-start">
              <span className="text-[#22c55e] mt-1 text-3xl">▸</span>
              <span>Drone innovation transforming industries</span>
            </li>

            <li className="flex gap-3 items-start">
              <span className="text-[#22c55e] mt-1 text-3xl">▸</span>
              <span>Secure and scalable digital ecosystems</span>
            </li>

            <li className="flex gap-3 items-start">
              <span className="text-[#22c55e] mt-1 text-3xl">▸</span>
              <span>Collaborative culture with continuous learning</span>
            </li>

          </ul>

        </div>

      </div>
    </section>
  );
} 