import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center hero-gradient pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-3/4 h-full rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-3/4 h-full rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Next-Generation Web Solutions with{" "}
            <span className="text-gradient">AI Integration</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300">
            We build fast, scalable websites using Next.js and React, enhanced
            with AI-powered automation to transform your online presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              Start Your Free Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-300 bg-slate-800/50 hover:bg-slate-800 rounded-lg transition-colors"
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
