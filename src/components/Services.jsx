"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// Service data structure
const services = [
  {
    title: "Enterprise Software Development",
    items: [
      "Full-Stack Development(.NET Core + Angular)",
      "Cloud-Native & Microservices Architecture",
      "API Development & System Integration",
      "Custom ERP / CRM Development",
      "Application Modernization & Migration",
    ],
  },
  {
    title: "AI / ML Solutions",
    items: [
      "Predictive Analytics & Forecasting Models",
      "Computer Vision & Image Recognition",
      "Natural Language Processing (NLP)",
      "Recommendation Systems & Personalization Engines",
      "Generative AI & Conversational Bots",
      "Model Deployment, Monitoring & Optimization",
    ],
  },
  {
    title: "Data Engineering & Analytics",
    items: [
      "End-to-End Data Pipeline Design",
      "Big Data Processing (Spark, Databricks, Azure Synapse)",
      "Real-Time Dashboards & Visualization",
      "Data Lake & Warehouse Implementation",
      "Data Governance & Quality Frameworks",
      "Predictive & Prescriptive Analytics",
    ],
  },
  {
    title: "Quality Assurance (QA) & Testing",
    items: [
      "Manual & Automated Testing",
      "API & Performance Testing",
      "Regression & UAT Testing",
      "CI/CD Testing Integration",
      "QA Process Automation",
      "Security & Compliance Testing",
    ],
  },
  {
    title: "SAP Consulting & Implementation",
    items: [
      "SAP S/4HANA Implementation & Migration",
      "SAP Analytics Cloud & BusinessObjects",
      "SAP Integration with AI/ML & Cloud Platforms",
      "Custom Modules (FICO, MM, SD, PP)",
      "SAP Basis & Infrastructure Services",
      "Post-Implementation Support & Optimization",
    ],
  },
  {
    title: "Cloud & Infrastructure Services",
    items: [
      "Cloud Strategy (Azure, AWS, GCP)",
      "Serverless & Container Deployments",
      "Cloud Security & Compliance",
      "Disaster Recovery & Optimization",
      "Infrastructure as Code (Terraform)",
      "24x7 Cloud Operations",
    ],
  },
  {
    title: "Automation & Digital Transformation",
    items: [
      "Robotic Process Automation (RPA)",
      "Business Workflow Automation",
      "Intelligent Document Processing (IDP)",
      "IoT Platform Integration",
      "AI Predictive Maintenance",
      "Legacy System Modernization",
    ],
  },
  {
    title: "Technology Consulting & Innovation",
    items: [
      "IT Strategy & Roadmap Design",
      "Architecture Consulting",
      "MVP & Product Development",
      "PoC Development",
      "Digital Maturity Assessment",
      "Innovation Labs & R&D",
    ],
  },
];

// Duplicate data to create a seamless infinite scrolling effect
const loopedServices = [...services, ...services];

// Animation setup for entrance
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Delay between each card appearing
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 120, // Start slightly below
    scale: 0.8,
    rotateX: 30, // 3D tilt effect
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1], // Custom smooth ease
    },
  },
};

export default function Services() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false); // Used to pause auto-scroll
  const isDragging = useRef(false); // Tracks mouse interaction
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const isButtonScrolling = useRef(false);
  const buttonScrollTimeout = useRef(null);

  /* AUTO SCROLL LOGIC */
  useEffect(() => {
    let animationFrame;
    const autoScroll = () => {
      if (!scrollRef.current) return;
      if (!isHovered && !isDragging.current && !isButtonScrolling.current) {
        scrollRef.current.scrollLeft += 1.5;
        // Reset scroll position for infinite loop
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };
    animationFrame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  /* BUTTON CLICK SCROLL */
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    isButtonScrolling.current = true;
    scrollRef.current.style.scrollBehavior = "smooth";
    const amount = 380;
    scrollRef.current.scrollLeft += direction === "left" ? -amount : amount;
    clearTimeout(buttonScrollTimeout.current);
    buttonScrollTimeout.current = setTimeout(() => {
      isButtonScrolling.current = false;
      if (scrollRef.current) scrollRef.current.style.scrollBehavior = "auto";
    }, 500);
  };

  /* MOUSE DRAG INTERACTION */
  const handleMouseDown = (e) => {
    isDragging.current = true;
    if (scrollRef.current) {
      scrollRef.current.classList.add("cursor-grabbing");
      scrollRef.current.style.scrollBehavior = "auto";
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeftStart.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    setIsHovered(false);
    if (scrollRef.current)
      scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current)
      scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  /* INDIVIDUAL SERVICE LIST ITEM */
/* UPDATED INDIVIDUAL SERVICE LIST ITEM */
const CardItem = ({ text }) => (
  <div className="flex items-start gap-3 group">
    {/* Icon container */}
    <span className="flex-shrink-0 mt-0.5 text-[#22c55e] text-sm">
      ✯
    </span>
    
    {/* Text container: w-full and block are key for justify to work */}
    <span className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-justify w-full block">
      {text}
    </span>
  </div>
);

  /* CARD COMPONENT */
  const Card = ({ title, items }) => (
    <div
      className="
    relative
    overflow-hidden
    rounded-2xl
    p-6

    bg-gradient-to-br
    from-slate-800/55
   via-[#02050a]/55
    to-black

    backdrop-blur-2xl
    border border-[#22c55e]/20

    shadow-2xl
    transition-all duration-500
    hover:-translate-y-2
    hover:border-[#22c55e]/40
    hover:shadow-[0_0_60px_rgba(34,197,94,0.18)]

    group
    h-full
    w-[78vw]
    sm:w-[290px]
    md:w-[340px]
    lg:w-[380px]
  "
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 bg-[#22c55e]/20 blur-[100px]" />
      </div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#22c55e]/50 to-transparent opacity-40" />
      <div className="relative z-10 text-left">
        <h3 className="text-2xl font-semibold mb-8 text-white tracking-wide">
          <span className="text-[#22c55e]">{title}</span>
        </h3>
        <div className="space-y-6">
          {items.map((item, i) => (
            <CardItem key={i} text={item} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="services"
    className="py-14 md:py-18 px-3 md:px-6 text-center overflow-hidden scroll-mt-[-70px]"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-center tracking-wide font-bold">
          <span className="text-white">OUR</span>
        <span className="text-[#22c55e]"> SERVICES</span>
      </h2>
    <p className="text-gray-400 max-w-4xl mx-auto mb-19 leading-relaxed text-justify md:text-center">
  Discover our end-to-end technology expertise — from AI solutions to enterprise systems, cloud infrastructure, and innovation consulting.
</p>

      <div className="relative w-full max-w-[1300px] mx-auto flex items-center overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-4 z-30 w-10 h-10 rounded-full border border-[#22c55e]/40 bg-black/70 text-[#22c55e] hover:bg-[#22c55e] hover:text-black transition-all"
        >
          ←
        </button>

        {/* Scrollable Container with Animation */}
        <motion.div
          ref={scrollRef}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          className="flex gap-4 md:gap-10 overflow-x-auto py-8 pl-20 pr-20 cursor-grab select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {loopedServices.map((service, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              variants={cardVariants}
            >
              <Card title={service.title} items={service.items} />
            </motion.div>
          ))}
        </motion.div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-4 z-30 w-10 h-10 rounded-full border border-[#22c55e]/40 bg-black/70 text-[#22c55e] hover:bg-[#22c55e] hover:text-black transition-all"
        >
          →
        </button>
      </div>
    </section>
  );
}
