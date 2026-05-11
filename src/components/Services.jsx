

export default function Services() {

    return (
        <section id="services" className="py-24 px-6 text-center">

            {/* TITLE */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
                OUR <span className="text-[#22c55e]">SERVICES</span>
            </h2>

            {/* SUBTEXT */}
            <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                Discover our end-to-end technology expertise — from intelligent AI solutions to enterprise-grade software systems,
                \ cloud infrastructure, and innovation consulting.
            </p>

            {/* CARDS */}
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

                {/* CARD 1 */}
                <div className="bg-white/1 backdrop-blur-md border border-[#22c55e]/20 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(143,255,214,0.08)] hover:shadow-[0_0_50px_rgba(143,255,214,0.15)] transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-[#22c55e]">
                        AI / ML Solutions
                    </h3>

                    <div className="max-w-3xl mx-auto text-left space-y-6 text-lg text-gray-400">

                        <p className="flex items-start gap-2 text-sm md:text-base">
                            <img
                                src="/drone-icon.png"
                                className="w-3 h-3 md:w-4 md:h-4 mt-1 shrink-0"
                            />
                            <span>Predictive Analytics & Forecasting Models</span>
                        </p>

                        <div className="flex items-center gap-2">
                            <img src="/drone-icon.png" className="w-4 h-4" />
                            <p>Computer Vision & Image Recognition</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src="/drone-icon.png" className="w-4 h-4" />
                            <p>Natural Language Processing (NLP)</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src="/drone-icon.png" className="w-4 h-4" />
                            <p>Recommendation Systems & Personalization Engines</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src="/drone-icon.png" className="w-4 h-4" />
                            <p>Generative AI & Conversational Bots</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <img src="/drone-icon.png" className="w-4 h-4" />
                            <p>Model Deployment, Monitoring & Optimization</p>
                        </div>

                    </div>
                </div>


                {/* CARD 2 */}
                <div className="bg-white/1 backdrop-blur-md border border-[#22c55e]/20 rounded-2xl p-6 md:p-8shadow-[0_0_30px_rgba(143,255,214,0.08)]hover:shadow-[0_0_50px_rgba(143,255,214,0.15)] transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-[#22c55e]">
                        Drone Development
                    </h3>
                    <p className="text-gray-400">
                        <div className="max-w-3xl mx-auto text-left space-y-6 text-lg">
                            <p>✯ Custom Drone Design & Engineering</p>
                            <p>✯ Drone Software + Hardware Integration</p>
                            <p>✯ AI-Powered Object Detection & Tracking</p>
                            <p>✯ Industrial Drone Applications</p>
                            <p>✯ Agricultural Drone Solutions</p>
                            <p>Drone Data Processing & Cloud Connectivity</p>
                        </div>
                    </p>
                </div>

                {/* CARD 3 */}
                <div className="bg-white/1 backdrop-blur-md border border-[#22c55e]/20 rounded-2xl p-6 md:p-8shadow-[0_0_30px_rgba(143,255,214,0.08)]hover:shadow-[0_0_50px_rgba(143,255,214,0.15)] transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-[#22c55e]">
                        Enterprise Software Development
                    </h3>
                    <p className="text-gray-400">
                        <div className="max-w-3xl mx-auto text-left space-y-6 text-lg">
                            <p>✯ Full-Stack Development (.NET Core + Angular)</p>
                            <p>✯ Cloud-Native & Microservices Architecture</p>
                            <p>✯ API Development & System Integration</p>
                            <p>✯ Custom ERP / CRM Application Development</p>
                            <p>✯ Application Modernization & Migration</p>
                        </div>
                    </p>
                </div>

                {/* CARD 4 */}
                <div className="bg-white/1 backdrop-blur-md border border-[#22c55e]/20 rounded-2xl p-6 md:p-8shadow-[0_0_30px_rgba(143,255,214,0.08)]hover:shadow-[0_0_50px_rgba(143,255,214,0.15)] transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-[#22c55e]">
                        Data Engineering & Analytics
                    </h3>
                    <p className="text-gray-400">
                        <div className="max-w-3xl mx-auto text-left space-y-6 text-lg">
                            <p>✯ End-to-End Data Pipeline Design</p>
                            <p>✯ Big Data Processing (Spark, Databricks, Azure Synapse)</p>
                            <p>✯ Real-Time Dashboards & Visualization</p>
                            <p>✯ Data Lake & Warehouse Implementation</p>
                            <p>✯ Data Governance & Quality Frameworks</p>
                            <p>✯ Predictive & Prescriptive Business Analytics</p>
                        </div>
                    </p>
                </div>

                {/* CARD 5 */}
                <div className="bg-white/1 backdrop-blur-md border border-[#22c55e]/20 rounded-2xl p-6 md:p-8shadow-[0_0_30px_rgba(143,255,214,0.08)]hover:shadow-[0_0_50px_rgba(143,255,214,0.15)] transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-[#22c55e]">
                        Quality Assurance (QA) & Testing Services
                    </h3>
                    <p className="text-gray-400">

                        <div className="max-w-3xl mx-auto text-left space-y-6 text-lg">
                            <p>✯ Manual & Automated Testing (Selenium, Cypress, Playwright)</p>
                            <p>✯ API & Performance Testing</p>
                            <p>✯ Regression, Functional & UAT Testing</p>
                            <p>✯ Continuous Testing in CI/CD Pipelines</p>
                            <p>✯ Test Strategy Consulting & QA Process Automation</p>
                            <p>✯ Security & Compliance Testing</p>
                        </div>
                    </p>
                </div>

                {/* CARD 6*/}
                <div className="bg-white/1 backdrop-blur-md border border-[#22c55e]/20 rounded-2xl p-6 md:p-8shadow-[0_0_30px_rgba(143,255,214,0.08)]hover:shadow-[0_0_50px_rgba(143,255,214,0.15)] transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-[#22c55e]">
                        SAP Consulting & Implementation
                    </h3>
                    <p className="text-gray-400">
                        <div className="max-w-3xl mx-auto text-left space-y-6 text-lg">
                            <p>✯ SAP S/4HANA Implementation & Migration</p>
                            <p>✯ SAP Analytics Cloud (SAC) & BusinessObjects</p>
                            <p>✯ SAP Integration with AI/ML & Cloud Platformse</p>
                            <p>✯ Custom Module Development (FICO, MM, SD, PP)</p>
                            <p>✯ SAP Basis & Infrastructure Services</p>
                            <p>✯ Post-Implementation Support & Optimization</p>
                        </div>
                    </p>
                </div>

                {/* CARD 7 */}
                <div className="bg-white/1 backdrop-blur-md border border-[#22c55e]/20 rounded-2xl p-6 md:p-8shadow-[0_0_30px_rgba(143,255,214,0.08)]hover:shadow-[0_0_50px_rgba(143,255,214,0.15)] transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-[#22c55e]">
                        Cloud & Infrastructure Services
                    </h3>
                    <p className="text-gray-400">
                        <div className="max-w-3xl mx-auto text-left space-y-6 text-lg">
                            <p>✯ Cloud Strategy & Architecture (Azure, AWS, GCP)</p>
                            <p>✯ Serverless & Containerized Deployments</p>
                            <p>✯ Cloud Security & Compliance</p>
                            <p>✯ Backup, Disaster Recovery & Cost Optimization</p>
                            <p>✯ Infrastructure as Code (Terraform, ARM)</p>
                            <p>✯ 24x7 Cloud Operations & Support</p>
                        </div>
                    </p>
                </div>

                {/* CARD 8 */}
                <div className="bg-white/1 backdrop-blur-md border border-[#22c55e]/20 rounded-2xl p-6 md:p-8shadow-[0_0_30px_rgba(143,255,214,0.08)]hover:shadow-[0_0_50px_rgba(143,255,214,0.15)] transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-[#22c55e]">
                        Automation & Digital Transformation
                    </h3>
                    <p className="text-gray-400">
                        <div className="max-w-3xl mx-auto text-left space-y-6 text-lg">
                            <p>✯ Robotic Process Automation (RPA)</p>
                            <p>✯ Business Workflow Automation</p>
                            <p>✯ Intelligent Document Processing (IDP)</p>
                            <p>✯ IoT Platform Integration</p>
                            <p>✯ AI-driven Predictive Maintenance</p>
                            <p>✯ Legacy System Modernization</p>
                        </div>
                    </p>
                </div>

                {/* CARD 9 */}
                <div className="bg-white/1 backdrop-blur-md border border-[#22c55e]/20 rounded-2xl p-6 md:p-8shadow-[0_0_30px_rgba(143,255,214,0.08)]hover:shadow-[0_0_50px_rgba(143,255,214,0.15)] transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3 text-[#22c55e]">
                        Technology Consulting & Innovation
                    </h3>
                    <p className="text-gray-400">
                        <div className="max-w-3xl mx-auto text-left space-y-6 text-lg">
                            <p>✯ IT Strategy & Roadmap Design</p>
                            <p>✯  Architecture Consulting</p>
                            <p>✯ Product Design & MVP Development</p>
                            <p>✯ Technology Feasibility & PoC Development</p>
                            <p>✯ Digital Maturity Assessment</p>
                            <p>✯ Innovation Labs & Emerging Tech R&D </p>
                        </div>
                    </p>
                </div>
            </div>
        </section>
    );
}