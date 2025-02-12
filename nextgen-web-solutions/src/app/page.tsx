import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import Pricing from "./components/pricing";
import FAQ from "./components/faq";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
