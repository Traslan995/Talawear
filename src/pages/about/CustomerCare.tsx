import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";
import { Button } from "../../components/ui/button";
import { Instagram } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/brand";

const CustomerCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader
            title="Доставка и оплата"
            subtitle="Всё, что нужно знать о заказе в talá"
          />

          <ContentSection title="Как сделать заказ">
            <div className="space-y-4 max-w-3xl">
              <p className="text-muted-foreground">
                Чтобы оформить заказ, напишите нам в Instagram {INSTAGRAM_HANDLE}.
                Укажите модель, желаемый размер и город доставки — мы ответим в течение
                рабочего дня и поможем с выбором.
              </p>
              <Button asChild className="rounded-none">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-4 h-4 mr-2" strokeWidth={1.5} />
                  Написать в Instagram
                </a>
              </Button>
            </div>
          </ContentSection>

          <ContentSection title="Частые вопросы">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="delivery" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Как осуществляется доставка?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3">
                  <p>Доставка по Беларуси европочтой 1–3 дня, белпочтой 1–3 дня (оплата при получении).</p>
                  <p>По Минску также возможна Яндекс доставка, оплата до отправления.</p>
                  <p>Стоимость доставки за счёт клиента.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Какие способы оплаты?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-3">
                  <p>При получении в отделении европочты/белпочты — наличными или картой.</p>
                  <p>Если Яндекс доставка — оплата до отправления по реквизитам.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="return" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Можно ли вернуть или обменять вещь?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да. Если размер не подошёл, вы можете обменять или вернуть вещь в течение 14 дней
                  при сохранении товарного вида и бирок.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="size" className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  Как подобрать размер?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Воспользуйтесь нашей размерной сеткой или напишите нам — мы поможем подобрать
                  идеальный размер по вашим меркам.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ContentSection>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default CustomerCare;
