import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import heroMain from "@/assets/hero-main.jpg";
import talaLogo from "@/assets/tala-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative w-full h-[calc(100vh-120px)] min-h-[500px] overflow-hidden">
          <img
            src={heroMain}
            alt="talá — новая коллекция"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none">
            <img
              src={talaLogo}
              alt="talá"
              className="w-full max-w-none opacity-40 mix-blend-screen"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          <div className="absolute inset-x-0 bottom-10 md:bottom-16 flex justify-center px-6">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-10 py-4 bg-white/95 backdrop-blur-sm text-foreground text-xs tracking-[0.25em] uppercase font-light hover:bg-white transition-colors duration-300"
            >
              В каталог
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
