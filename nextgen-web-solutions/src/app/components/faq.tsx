"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Why are you offering free initial services?",
    answer:
      "We believe in demonstrating our value first. By offering free initial services, we can build our portfolio, establish trust, and showcase our expertise in modern web development and AI integration.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We specialize in Next.js, React, and TypeScript for frontend development, combined with AI technologies like OpenAI API and n8n for automation. We also use Tailwind CSS for styling and various other modern tools for optimal performance.",
  },
  {
    question: "How long does it take to complete a website?",
    answer:
      "Project timelines vary depending on complexity, but typically range from 2-8 weeks. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages. For our initial clients, we provide 3 months of free support to ensure your website runs smoothly.",
  },
  {
    question: "Can you integrate AI features into existing websites?",
    answer:
      "Yes, we can integrate AI chatbots and automation features into existing websites. We'll assess your current setup and recommend the best approach for integration.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-slate-800/50 hover:bg-slate-800 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-slate-800/25">
                  <p className="text-slate-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
