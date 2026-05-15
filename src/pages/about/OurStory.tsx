import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";
import { Button } from "../../components/ui/button";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/brand";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="О бренде talá"
            subtitle="Бренд женской одежды собственного производства из Минска"
          />

          <ContentSection title="Наша история">
            <div className="space-y-6 max-w-3xl">
              <p className="text-muted-foreground leading-relaxed">
                talá — белорусский бренд женской одежды, созданный для тех, кто ценит
                лаконичный стиль, продуманный крой и качество в каждой детали.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Наша цель — создавать одежду, которую хочется носить каждый день: вещи,
                подчёркивающие женственность, легко сочетающиеся между собой и остающиеся
                актуальными вне сезонных трендов.
              </p>
            </div>
          </ContentSection>

          <ContentSection title="Наши ценности">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="text-lg font-light text-foreground">Качество</h3>
                <p className="text-muted-foreground">
                  Мы тщательно выбираем ткани и фурнитуру, чтобы каждая вещь служила долго.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-light text-foreground">Лаконичность</h3>
                <p className="text-muted-foreground">
                  Чистые линии и продуманные силуэты, которые работают в любом гардеробе.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-light text-foreground">Внимание</h3>
                <p className="text-muted-foreground">
                  Личное общение с каждой клиенткой — от выбора размера до доставки.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Связаться с нами">
            <div className="space-y-4 max-w-2xl">
              <p className="text-muted-foreground">
                Все вопросы о наличии, размерах, доставке и оформлении заказа — в нашем Instagram.
              </p>
              <Button asChild className="rounded-none">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2" strokeWidth={1.5} />
                  Написать в Instagram
                </a>
              </Button>
            </div>
          </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;
