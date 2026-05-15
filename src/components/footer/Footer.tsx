import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import talaLogo from "@/assets/tala-logo.png";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/brand";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-black pt-12 pb-2 px-6 border-t border-[#e5e5e5] mt-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
        {/* Brand */}
        <div>
          <img src={talaLogo} alt="talá" className="mb-4 h-14 w-auto" />
          <p className="text-sm font-light text-black/70 leading-relaxed max-w-md mb-6">
            Бренд женской одежды собственного производства. Минск, Беларусь.
          </p>

          <div className="space-y-2 text-sm font-light text-black/70">
            <p className="font-normal text-black mb-1">Связаться с нами</p>
            <p>📍 Минск, Беларусь</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-black transition-colors"
            >
              <Instagram size={16} strokeWidth={1.5} />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-normal mb-4">Магазин</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sm font-light text-black/70 hover:text-black transition-colors">
                  Каталог
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-normal mb-4">Информация</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about/our-story" className="text-sm font-light text-black/70 hover:text-black transition-colors">
                  О бренде
                </Link>
              </li>
              <li>
                <Link to="/about/customer-care" className="text-sm font-light text-black/70 hover:text-black transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-black/70 hover:text-black transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e5e5e5] -mx-6 px-6 pt-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-light text-black mb-1 md:mb-0">
            © {new Date().getFullYear()} talá. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm font-light text-black hover:text-black/70 transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms-of-service" className="text-sm font-light text-black hover:text-black/70 transition-colors">
              Условия
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
