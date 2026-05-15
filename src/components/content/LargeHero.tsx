import heroImage from "@/assets/tshirt-hearts-chocolate-1.jpg";
import { Link } from "react-router-dom";

const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <Link to="/product/100" className="block">
        <div className="w-full aspect-[16/9] mb-3 overflow-hidden">
          <img
            src={heroImage}
            alt="Футболка стразы model 12.0 — talá"
            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </Link>
      <div>
        <h2 className="text-sm font-normal text-foreground mb-1">Футболка стразы — model 12.0</h2>
        <p className="text-sm font-light text-foreground">
          Оверсайз-силуэт, 100% хлопок. Сердце из страз на спине.
        </p>
      </div>
    </section>
  );
};

export default LargeHero;
