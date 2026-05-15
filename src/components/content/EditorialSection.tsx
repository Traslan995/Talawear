import editorial from "@/assets/tshirt-hearts-black-2.jpg";
import { ArrowRight, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { INSTAGRAM_URL } from "@/lib/brand";

const EditorialSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 max-w-[630px]">
          <h2 className="text-2xl font-normal text-foreground leading-tight md:text-xl">
            talá — одежда, в которой вы остаётесь собой
          </h2>
          <p className="text-sm font-light text-foreground leading-relaxed">
            Мы — белорусский бренд женской одежды собственного производства. Создаём
            лаконичные силуэты с вниманием к крою, ткани и каждой детали, чтобы
            каждая вещь становилась любимой надолго.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              to="/about/our-story"
              className="inline-flex items-center gap-1 text-sm font-light text-foreground hover:text-foreground/80 transition-colors duration-200"
            >
              <span>Узнать больше о бренде</span>
              <ArrowRight size={12} />
            </Link>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-light text-foreground hover:text-foreground/80 transition-colors duration-200"
            >
              <Instagram size={14} strokeWidth={1.5} />
              <span>Заказать в Instagram</span>
            </a>
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="w-full aspect-square overflow-hidden">
            <img
              src={editorial}
              alt="talá — бренд женской одежды"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
