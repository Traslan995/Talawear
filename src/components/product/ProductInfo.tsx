import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getProductById } from "@/lib/products";
import { INSTAGRAM_URL } from "@/lib/brand";
import { useProductColor } from "@/lib/productColorContext";

const ProductInfo = () => {
  const { productId } = useParams();
  const product = getProductById(productId || 1);
  const { selectedColorId, setSelectedColorId } = useProductColor();
  const selectedVariant = product.colorVariants?.find((v) => v.id === selectedColorId);

  const igMessage = `${INSTAGRAM_URL}`;

  return (
    <div className="space-y-6">
      <div className="hidden lg:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Главная</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/shop">Каталог</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-start gap-3">
          <div className="min-w-0 flex-1">
            <h1 className="text-base md:text-xl font-light text-foreground whitespace-nowrap overflow-hidden text-ellipsis">
              {product.name}
            </h1>
          </div>
          <div className="text-right shrink-0">
            {(() => {
              const price = selectedVariant?.price ?? product.price;
              const originalPrice = selectedVariant?.originalPrice ?? product.originalPrice;
              const discountPercent = selectedVariant?.discountPercent ?? product.discountPercent;
              return (
                <>
                  <div className="flex items-baseline justify-end gap-2 whitespace-nowrap">
                    {originalPrice && (
                      <p className="text-xs font-light text-muted-foreground line-through">{originalPrice}</p>
                    )}
                    <p className="text-base md:text-lg font-light text-foreground">{price}</p>
                  </div>
                  {discountPercent && (
                    <p className="text-xs font-medium text-destructive mt-1">−{discountPercent}%</p>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </div>

      <div className="space-y-4 py-4 border-b border-border">
        {product.details?.material && (
          <div className="space-y-2">
            <h3 className="text-sm font-light text-foreground">Материал</h3>
            <p className="text-sm font-light text-muted-foreground">{product.details.material}</p>
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Состав</h3>
          <p className="text-sm font-light text-muted-foreground">
            {product.details?.composition || "Премиальные ткани собственного отбора"}
          </p>
        </div>

        {product.colorVariants && product.colorVariants.length > 0 ? (
          <div className="space-y-3">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-light text-foreground">Цвет</h3>
              <p className="text-xs font-light text-muted-foreground">
                {selectedVariant?.label}
                {selectedVariant && !selectedVariant.images?.length ? " — фото скоро" : ""}
              </p>
            </div>
            <div className="flex gap-3">
              {product.colorVariants.map((v) => {
                const isSelected = v.id === selectedColorId;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedColorId(v.id)}
                    aria-label={v.label}
                    title={v.label}
                    className={`relative w-9 h-9 rounded-full border transition-all ${
                      isSelected
                        ? "border-foreground ring-1 ring-foreground ring-offset-2 ring-offset-background"
                        : "border-border hover:border-foreground/50"
                    }`}
                    style={{ backgroundColor: v.swatch }}
                  />
                );
              })}
            </div>
          </div>
        ) : product.details?.colors ? (
          <div className="space-y-2">
            <h3 className="text-sm font-light text-foreground">Цвета</h3>
            <p className="text-sm font-light text-muted-foreground">{product.details.colors}</p>
          </div>
        ) : null}

        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Размер</h3>
          <p className="text-sm font-light text-muted-foreground">
            {product.details?.sizes || "XS — L (уточняйте наличие)"}
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Производство</h3>
          <p className="text-sm font-light text-muted-foreground">Минск, Беларусь</p>
        </div>

        {product.details?.note && (
          <div className="space-y-2">
            <h3 className="text-sm font-light text-foreground">Описание</h3>
            <p className="text-sm font-light text-muted-foreground italic">«{product.details.note}»</p>
          </div>
        )}
      </div>


      <div className="space-y-3">
        <Button
          asChild
          className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-light rounded-none"
        >
          <a href={igMessage} target="_blank" rel="noopener noreferrer">
            <Instagram className="w-4 h-4 mr-2" strokeWidth={1.5} />
            Заказать в Instagram
          </a>
        </Button>
        <p className="text-xs font-light text-muted-foreground text-center">
          Чтобы оформить заказ, напишите нам в Instagram — мы ответим и поможем с выбором размера и доставкой.
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
