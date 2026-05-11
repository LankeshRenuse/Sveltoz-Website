export default function Culture() {
  return (
    <section id="culture" className="py-16 px-4 relative ">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT GLASS CARD (CONTENT FIRST NOW) */}
        <div className="w-full md:w-1/2">

    <div className="bg-white/1 backdrop-blur-lg border border-[#22c55e]/20 rounded-2xl p-8 shadow-xl  glow-target">
            {/* TITLE */}
            <h2 className="text-3xl md:text-5xl font-bold text-[#22c55e] mb-4">
               <span className="text-white">CULTURE </span>
            <span className="text-[#22c55e]"> & VALUES</span>   
            </h2>

            {/* TEXT */}
            <p className="text-gray-300 mb-4 leading-relaxed">
              At <b className="text-white">Sveltoz</b>, we believe that great technology begins with great people.
              Our culture is built on <span className="text-[#22c55e]">curiosity, collaboration, and continuous learning</span> —
              the forces that drive innovation every day.
            </p>

            {/* VALUES */}
            <ul className="space-y-3 text-gray-300">

              <li className="flex gap-3">
                <span className="text-[#22c55e]">▸</span>
                <span><b className="text-white">Innovation:</b> Embracing what’s next</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#22c55e]">▸</span>
                <span><b className="text-white">Integrity:</b> Transparency & trust</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#22c55e]">▸</span>
                <span><b className="text-white">Excellence:</b> Precision & quality</span>
              </li>

              <li className="flex gap-3">
                <span className="text-[#22c55e]">▸</span>
                <span><b className="text-white">Collaboration:</b> Growing together</span>
              </li>

            </ul>

            {/* FOOT */}
            <p className="text-gray-400 mt-6 text-sm leading-relaxed">
              Every Sveltoz project is more than a task — it’s a shared journey toward innovation.
            </p>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/culture.png"
            alt="Culture"
            className="rounded-2xl shadow-xl w-full h-[260px] md:h-[400px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}