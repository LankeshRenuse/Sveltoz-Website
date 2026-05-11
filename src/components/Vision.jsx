export default function Vision() {
  return (
    <section id="vision" className="py-16 px-4">

      <div className="  max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT GLASS CARD */}
        <div className="w-full md:w-1/2">
       <div className="bg-white/1 backdrop-blur-lg border border-[#22c55e]/20 rounded-2xl p-8 shadow-xl  glow-target">

            <h2 className="text-3xl md:text-5xl font-bold text-[#22c55e] mb-4">
              VISION
            </h2>

            <ul className="space-y-4 text-gray-300 leading-relaxed">

              <li className="flex gap-3">
                <span className="text-[#22c55e]">▸</span>
                <span>
                  To be a global leader in intelligent digital engineering, helping enterprises harness AI, Machine Learning, Cloud, and Automation.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#22c55e]">▸</span>
                <span>
                  We envision a future where technology becomes a trusted partner in shaping smarter decisions and impactful innovation.
                </span>
              </li>

            </ul>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/vision.png"
            alt="Vision"
            className="rounded-2xl shadow-xl w-full h-[260px] md:h-[400px] object-cover"
          />
        </div>

      </div>
    </section>
  );
} 