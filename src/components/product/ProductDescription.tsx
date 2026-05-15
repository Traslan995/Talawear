import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductDescriptionProps {
  productName?: string;
}

const ProductDescription = ({ productName = "" }: ProductDescriptionProps) => {
  const hasRhinestones = /страз/i.test(productName);
  const isBomber = /бомбер/i.test(productName);
  const [isCareOpen, setIsCareOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  return (
    <div className="space-y-0 mt-8 border-t border-border">
      {!isBomber && (
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsCareOpen(!isCareOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <span>Уход</span>
          {isCareOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {isCareOpen && (
          <div className="pb-6 space-y-4">
            <ul className="space-y-2">
              <li className="text-sm font-light text-muted-foreground">• Деликатная стирка при 30°C</li>
              <li className="text-sm font-light text-muted-foreground">• Не отбеливать</li>
              <li className="text-sm font-light text-muted-foreground">• Гладить при низкой температуре</li>
              <li className="text-sm font-light text-muted-foreground">• Хранить на вешалке в сухом месте</li>
              {hasRhinestones && (
                <li className="text-sm font-light text-muted-foreground">• Не проходиться утюгом по стразам</li>
              )}
            </ul>
          </div>
        )}
      </div>
      )}

      <div className="border-b border-border lg:mb-16">
        <Button
          variant="ghost"
          onClick={() => setIsShippingOpen(!isShippingOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <span>Доставка и оплата</span>
          {isShippingOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {isShippingOpen && (
          <div className="pb-6 space-y-4 text-sm font-light text-muted-foreground leading-relaxed">
            <div className="space-y-2">
              <p className="text-foreground">Доставка</p>
              <p>Доставка по Беларуси европочтой 1–3 дня, белпочтой 1–3 дня (оплата при получении).</p>
              <p>По Минску также возможна Яндекс доставка, оплата до отправления.</p>
              <p>Стоимость доставки за счёт клиента.</p>
            </div>
            <div className="space-y-2">
              <p className="text-foreground">Оплата</p>
              <p>При получении в отделении европочты/белпочты — наличными или картой.</p>
              <p>Если Яндекс доставка — оплата до отправления по реквизитам.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
