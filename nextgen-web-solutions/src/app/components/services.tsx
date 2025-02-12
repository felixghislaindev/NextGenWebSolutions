import { Code, Bot, Rocket, RefreshCw } from "lucide-react";

const services = [
  {
    title: "Custom Website Development",
    description:
      "Modern, SEO-friendly websites built with Next.js, React, and Tailwind CSS.",
    icon: Code,
    gradient: "from-purple-500 to-blue-500",
  },
  {
    title: "AI Chatbots & Automation",
    description:
      "Intelligent chatbots integrated with OpenAI API and n8n for enhanced customer engagement.",
    icon: Bot,
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "SaaS & Web App Development",
    description:
      "Scalable web applications with modern API integrations and robust architecture.",
    icon: Rocket,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Website Redesign & Optimization",
    description:
      "Performance optimization and UI/UX improvements for existing websites.",
    icon: RefreshCw,
    gradient: "from-cyan-500 to-blue-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Currently offering free initial services to build our portfolio and
            showcase our expertise in modern web development and AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}
              />
              <div className="relative">
                <service.icon className="h-8 w-8 text-white mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
