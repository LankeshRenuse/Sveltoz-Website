
export default function Story() {
  return (
    <section id="story" className="py-24 px-6">

      <div className="  max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/story.png"
            alt="Story"
            className="rounded-2xl shadow-xl w-full h-[260px] md:h-[400px] object-cover"
          />
        </div>

        {/* RIGHT GLASS CARD */}
        <div className="w-full md:w-1/2">

       <div className="bg-white/1 backdrop-blur-lg border border-[#22c55e]/20 rounded-2xl p-8 shadow-xl  glow-target">
            <h2 className="text-3xl md:text-5xl font-bold text-[#22c55e] mb-4">
              <span className="text-white">OUR </span>
            <span className="text-[#22c55e]">STORY</span>  
            </h2>

            <ul className="space-y-3 text-gray-300">

              <li className="flex gap-3">
                <span className="text-[#22c55e] text-3xl ">▸</span>
                <span>
                  Sveltoz was founded 16 years ago to bridge technology and real-world challenges.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#22c55e] text-3xl ">▸</span>
                <span>
                  From a small team, we evolved into a company delivering AI, drone, and cloud solutions.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#22c55e] text-3xl ">▸</span>
                <span>
                  We built a strong reputation for engineering excellence and innovation.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#22c55e] text-3xl ">▸</span>
                <span>
                  Every solution helps businesses move faster, think smarter, and scale efficiently.
                </span>
              </li>

            </ul>

          </div>
        </div>

      </div>
    </section>
  );
}