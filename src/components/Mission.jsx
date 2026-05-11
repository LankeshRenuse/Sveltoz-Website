

export default function Mission() {
  return (
    <section
      id="mission"
      className="  py-16 px-4 bg-[url('/bg.jpg')] bg-cover bg-center"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src="/mission1.png"
            alt="Mission"
            className="rounded-2xl shadow-xl w-[90%] md:w-full max-h-[420px] object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="bg-white/1 backdrop-blur-lg border border-[#22c55e]/20 rounded-2xl p-8 shadow-xl  glow-target">

          <h2 className="text-3xl md:text-5xl text-[#22c55e] mb-6 font-bold">
            MISSION
          </h2>

          <p className="text-gray-300 mb-5 leading-relaxed">
            At <b className="text-white">Sveltoz</b>, our mission is to accelerate
            business transformation through{" "}
            <span className="text-[#22c55e]">intelligence, innovation, and integrity</span>.
          </p>

          <p className="text-gray-300 mb-6 leading-relaxed">
            We combine the power of{" "}
            <b className="text-white">
              AI, Machine Learning, Drone Engineering, and Cloud Technologies
            </b>{" "}
            to deliver solutions that make enterprises more agile, efficient,
            and future-ready.
          </p>

          {/* CORE PRINCIPLES */}
          <ul className="space-y-4 text-gray-300 mb-6">

            <li className="flex gap-3">
              <span className="text-[#22c55e]">▸</span>
              <span>
                <b className="text-white">Innovate Relentlessly:</b> Turning emerging technologies into business advantage.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#22c55e]">▸</span>
              <span>
                <b className="text-white">Engineer Excellence:</b> Delivering high-quality solutions that exceed expectations.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#22c55e]">▸</span>
              <span>
                <b className="text-white">Empower Growth:</b> Enabling businesses to scale and succeed.
              </span>
            </li>

          </ul>

          {/* FINAL LINE */}
          <p className="text-gray-400 leading-relaxed">
            Our mission is not just to implement solutions — but to co-create
            the future with our partners, one intelligent system at a time.
          </p>

        </div>
      </div>
    </section>
  );
}