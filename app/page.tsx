import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Studio from "@/components/Studio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Manifesto />
        <Services />
        <Work />
        <Process />
        <Studio />
      </main>
      <Footer />
    </>
  );
}
