import { Link } from "react-router-dom";
import editorial1 from "@/assets/editorial-1.jpg";
import editorial2 from "@/assets/editorial-2.jpg";
import editorial3 from "@/assets/editorial-3.jpg";
import editorial4 from "@/assets/editorial-4.jpg";

const EditorialGrid = () => {
  return (
    <section className="w-full mb-16">
      {/* Full-bleed hero */}
      <Link to="/shop" className="block group">
        <div className="w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden">
          <img
            src={editorial1}
            alt="Новая коллекция talá — кожаная куртка"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
        <div className="px-6 pt-4 pb-2">
          <p className="text-[11px] tracking-[0.2em] uppercase text-foreground font-light">
            Новая коллекция
          </p>
          <h2 className="mt-1 text-base md:text-lg font-light text-foreground">
            Outerwear — осень/зима
          </h2>
        </div>
      </Link>

      {/* Two-up grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-x-1 gap-y-8">
        <Link to="/shop" className="block group">
          <div className="w-full aspect-[3/4] overflow-hidden">
            <img
              src={editorial2}
              alt="Casual — talá"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
          <div className="px-6 pt-3">
            <p className="text-[11px] tracking-[0.2em] uppercase text-foreground font-light">
              Denim
            </p>
            <h3 className="mt-1 text-sm font-light text-foreground">
              Свободные силуэты
            </h3>
          </div>
        </Link>

        <Link to="/shop" className="block group">
          <div className="w-full aspect-[3/4] overflow-hidden">
            <img
              src={editorial3}
              alt="Спортивный шик — talá"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
          <div className="px-6 pt-3">
            <p className="text-[11px] tracking-[0.2em] uppercase text-foreground font-light">
              Athleisure
            </p>
            <h3 className="mt-1 text-sm font-light text-foreground">
              Велюр и худи
            </h3>
          </div>
        </Link>
      </div>

      {/* Full-bleed second hero */}
      <Link to="/shop" className="block group mt-12">
        <div className="w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden">
          <img
            src={editorial4}
            alt="Минимализм — talá"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
        <div className="px-6 pt-4">
          <p className="text-[11px] tracking-[0.2em] uppercase text-foreground font-light">
            Essentials
          </p>
          <h2 className="mt-1 text-base md:text-lg font-light text-foreground">
            Базовый гардероб
          </h2>
        </div>
      </Link>
    </section>
  );
};

export default EditorialGrid;
