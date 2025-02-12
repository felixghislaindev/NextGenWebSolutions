import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for small businesses just getting started",
    features: [
      "Custom Website Development",
      "Basic SEO Optimization",
      "Mobile Responsive Design",
      "Basic Analytics Integration",
      "3 Months Free Maintenance",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Professional",
    price: "Coming Soon",
    description: "Ideal for growing businesses needing AI integration",
    features: [
      "Everything in Starter",
      "AI Chatbot Integration",
      "Advanced SEO Optimization",
      "Performance Monitoring",
      "Priority Support",
      "Custom Analytics Dashboard",
    ],
    cta: "Join Waitlist",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations requiring complete solutions",
    features: [
      "Everything in Professional",
      "Custom AI Solutions",
      "Dedicated Support Team",
      "Custom Integrations",
      "Advanced Security Features",
      "SLA Guarantee",
    ],
    cta: "Contact Us",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transparent Pricing
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Start with our free tier to experience our quality service. Upgrade
            when you&apos;re ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                tier.featured
                  ? "bg-gradient-to-b from-purple-500/10 to-blue-500/10 border-2 border-purple-500/20"
                  : "bg-slate-800/50 border border-slate-700"
              } p-8 flex flex-col`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 -translate-y-1/2 px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                  Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">
                    {tier.price}
                  </span>
                </div>
                <p className="text-slate-300">{tier.description}</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-purple-400 mr-2 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  tier.featured
                    ? "bg-purple-500 hover:bg-purple-600 text-white"
                    : "bg-slate-700 hover:bg-slate-600 text-white"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
