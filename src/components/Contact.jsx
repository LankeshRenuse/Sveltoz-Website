import { useRef, useState } from "react";

export default function Contact() {

  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {

    e.preventDefault();

    setLoading(true);

    const formData = {
      user_name: formRef.current.user_name.value,
      company: formRef.current.company.value,
      user_email: formRef.current.user_email.value,
      phone: formRef.current.phone.value,
      message: formRef.current.message.value,
    };

    try {

      const response = await fetch(
        "http://localhost:5000/send-email",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      console.log(data);

      if (response.ok && data.success) {

        alert("Message Sent ✅");

        formRef.current.reset();

      } else {

        alert(data.message || "Failed ❌");
      }

    } catch (error) {

      console.log(error);

      alert("Server Error ❌");
    }

    setLoading(false);
  };

  return (

    <section
      id="contact"
      className="py-10 md:py-10 px-4 md:px-4 bg-transparent"
    >

      {/* ================= TITLE ================= */}

      <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16 text-center tracking-wide font-bold">

        <span className="text-white">
          CONTACT
        </span>

        <span className="text-[#22c55e]">
          {" "}US
        </span>

      </h2>

      {/* ================= MAIN ================= */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">

        {/* ================= LEFT ================= */}

        <div className="space-y-8 md:space-y-8 text-center md:text-left">

          <div>

            <p className="text-[#22c55e] uppercase text-sm mb-1">
              Head Office
            </p>

            <h3 className="text-lg md:text-xl font-semibold">
              Sveltoz Solutions Pvt. Ltd.
            </h3>

            <p className="text-gray-300 mt-2 leading-relaxed text-sm md:text-base">
              Show Room Right, 83, Deodar, 2nd Floor, Lane 1
              <br />
              Behind Royal Enfield, Bhusari Colony, Kothrud
              <br />
              Pune, Maharashtra 411038, India
            </p>

            <div className="mt-3">

              <a
                href="https://www.linkedin.com/company/sveltoz-solutions-pvt-ltd/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block
                  border border-[#22c55e]/30
                  text-[#22c55e]
                  px-4 py-2
                  text-sm
                  rounded-md
                  hover:bg-[#22c55e]/10
                  transition
                "
              >
                LinkedIn →
              </a>

            </div>

          </div>

          <div>

            <p className="text-[#22c55e] uppercase text-sm mb-1">
              United States
            </p>

            <h3 className="text-lg md:text-xl font-semibold">
              US Partner
            </h3>

            <p className="text-gray-300 mt-2 leading-relaxed text-sm md:text-base">
              CerebralAlpha Tech
              <br />
              4116 Berry Ridge Road
              <br />
              Frisco, Texas 75036, USA
            </p>

            <div className="mt-3">

              <a
                href="https://www.linkedin.com/company/cerebralalpha-tech/"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block
                  border border-[#22c55e]/30
                  text-[#22c55e]
                  px-4 py-2
                  text-sm
                  rounded-md
                  hover:bg-[#22c55e]/10
                  transition
                "
              >
                LinkedIn →
              </a>

            </div>

          </div>

        </div>

        {/* ================= RIGHT FORM ================= */}

        <div className="flex justify-center">

          <div className="
            bg-white/1
            backdrop-blur-lg
            border border-[#22c55e]/20
            rounded-2xl
            p-8
            shadow-xl
            w-full
          ">

            <h3 className="
              text-[#22c55e]
              text-lg md:text-xl
              mb-5
              tracking-widest
              text-center md:text-left
            ">
             We’d love to hear from you! Please fill out the form below.
            </h3>

            <form
              ref={formRef}
              onSubmit={sendEmail}
            >

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">

                <input
                  name="user_name"
                  type="text"
                  placeholder="Your name"
                  className="input-style"
                  required
                />

                <input
                  name="company"
                  type="text"
                  placeholder="Company / Unit"
                  className="input-style"
                />

                <input
                  name="user_email"
                  type="email"
                  placeholder="your@email.com"
                  className="input-style"
                  required
                />

                <input
                  name="phone"
                  type="text"
                  placeholder="+91 XXXXX XXXXX"
                  className="input-style"
                />

              </div>

              <textarea
                name="message"
                rows="4"
                placeholder="Describe your requirement..."
                className="
                  input-style
                  mt-4 md:mt-6
                  w-full
                  resize-none
                "
                required
              />

              <div className="mt-6 md:mt-8 text-center md:text-left">

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    px-6 md:px-8 py-2.5 md:py-3
                    border border-[#22c55e]
                    text-[#22c55e]
                    text-sm md:text-base
                    rounded-md
                    hover:bg-[#22c55e]/10
                    hover:shadow-[0_0_20px_rgba(143,255,214,0.3)]
                    transition-all duration-300
                    disabled:opacity-50
                  "
                >

                  {
                    loading
                      ? "SENDING..."
                      : "TRANSMIT →"
                  }

                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

      {/* ================= JOIN TEAM ================= */}

      <div className="
        mt-10 md:mt-14
        pt-6 md:pt-8
        border-t border-[#22c55e]/10
        text-center
      ">

        <h2 className="
          text-xl md:text-3xl lg:text-4xl
          font-semibold
          text-[#22c55e]
          tracking-wide
          mb-2 md:mb-3
        ">
          JOIN OUR TEAM
        </h2>

        <p className="
          text-gray-300
          max-w-lg
          mx-auto
          leading-relaxed
          text-sm md:text-base
        ">
          We are always looking for passionate,
          talented individuals who want to innovate
          and create real impact.
        </p>

      </div>

    </section>
  );
}