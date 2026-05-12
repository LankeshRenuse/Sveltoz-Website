export default function Services() {
  const CardItem = ({ text }) => (
    <div className="flex items-start gap-3">
      <img
        src="/drone-icon.png"
        className="w-5 h-5 mt-1 object-contain drone-icon"
        alt="icon"
      />
      <span>{text}</span>
    </div>
  );

  const Card = ({ title, items }) => (
    <div className="bg-white/1 backdrop-blur-md border border-[#22c55e]/20 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(143,255,214,0.08)] hover:shadow-[0_0_50px_rgba(143,255,214,0.15)] transition-all duration-300">

      <h3 className="text-xl font-semibold mb-6 text-[#22c55e]">
        {title}
      </h3>

      <div className="space-y-5 text-left text-gray-400">
        {items.map((item, i) => (
          <CardItem key={i} text={item} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="services" className="py-24 px-6 text-center">

      {/* TITLE */}
      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        OUR <span className="text-[#22c55e]">SERVICES</span>
      </h2>

      {/* SUBTEXT */}
      <p className="text-gray-400 max-w-2xl mx-auto mb-16">
        Discover our end-to-end technology expertise — from AI solutions to enterprise systems,
        cloud infrastructure, and innovation consulting.
      </p>

      {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">

        <Card
          title="AI / ML Solutions"
          items={[
            "Predictive Analytics & Forecasting Models",
            "Computer Vision & Image Recognition",
            "Natural Language Processing (NLP)",
            "Recommendation Systems & Personalization Engines",
            "Generative AI & Conversational Bots",
            "Model Deployment, Monitoring & Optimization",
          ]}
        />

        <Card
          title="Drone Development"
          items={[
            "Custom Drone Design & Engineering",
            "Drone Software + Hardware Integration",
            "AI-Powered Object Detection & Tracking",
            "Industrial Drone Applications",
            "Agricultural Drone Solutions",
            "Drone Data Processing & Cloud Connectivity",
          ]}
        />

        <Card
          title="Enterprise Software Development"
          items={[
            "Full-Stack Development (.NET Core + Angular)",
            "Cloud-Native & Microservices Architecture",
            "API Development & System Integration",
            "Custom ERP / CRM Development",
            "Application Modernization & Migration",
          ]}
        />

        <Card
          title="Data Engineering & Analytics"
          items={[
            "End-to-End Data Pipeline Design",
            "Big Data Processing (Spark, Databricks, Azure Synapse)",
            "Real-Time Dashboards & Visualization",
            "Data Lake & Warehouse Implementation",
            "Data Governance & Quality Frameworks",
            "Predictive & Prescriptive Analytics",
          ]}
        />

        <Card
          title="Quality Assurance (QA) & Testing"
          items={[
            "Manual & Automated Testing (Selenium, Cypress, Playwright)",
            "API & Performance Testing",
            "Regression & UAT Testing",
            "CI/CD Testing Integration",
            "QA Process Automation",
            "Security & Compliance Testing",
          ]}
        />

        <Card
          title="SAP Consulting & Implementation"
          items={[
            "SAP S/4HANA Implementation & Migration",
            "SAP Analytics Cloud & BusinessObjects",
            "SAP Integration with AI/ML & Cloud Platforms",
            "Custom Modules (FICO, MM, SD, PP)",
            "SAP Basis & Infrastructure Services",
            "Post-Implementation Support & Optimization",
          ]}
        />

        <Card
          title="Cloud & Infrastructure Services"
          items={[
            "Cloud Strategy (Azure, AWS, GCP)",
            "Serverless & Container Deployments",
            "Cloud Security & Compliance",
            "Disaster Recovery & Optimization",
            "Infrastructure as Code (Terraform)",
            "24x7 Cloud Operations",
          ]}
        />

        <Card
          title="Automation & Digital Transformation"
          items={[
            "Robotic Process Automation (RPA)",
            "Business Workflow Automation",
            "Intelligent Document Processing (IDP)",
            "IoT Platform Integration",
            "AI Predictive Maintenance",
            "Legacy System Modernization",
          ]}
        />

        <Card
          title="Technology Consulting & Innovation"
          items={[
            "IT Strategy & Roadmap Design",
            "Architecture Consulting",
            "MVP & Product Development",
            "PoC Development",
            "Digital Maturity Assessment",
            "Innovation Labs & R&D",
          ]}
        />

      </div>
    </section>
  );
}