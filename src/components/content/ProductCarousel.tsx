import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PRODUCTS, getRelatedProducts } from "@/lib/products";

interface ProductCarouselProps {
  currentProductId?: number;
}

const ProductCarousel = ({ currentProductId }: ProductCarouselProps) => {
  const products = currentProductId ? getRelatedProducts(currentProductId, 8) : PRODUCTS.slice(0, 8);

  return (
    <section className="w-full mb-16 px-6">
      <Carousel opts={{ align: "start", loop: false }} className="w-full">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 pr-2 md:pr-4"
            >
              <Link to={`/product/${product.id}`}>
                <Card className="border-none shadow-none bg-transparent group">
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] mb-3 overflow-hidden bg-muted/10 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={product.altImage}
                        alt={`${product.name} — деталь`}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-300 opacity-0 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/[0.03]"></div>
                      {product.discountPercent && (
                        <div className="absolute top-2 right-2 px-2 py-1 text-xs font-medium text-white bg-destructive">
                          −{product.discountPercent}%
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center gap-2">
                        <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
                        <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                          {product.originalPrice && (
                            <p className="text-xs font-light text-muted-foreground line-through">{product.originalPrice}</p>
                          )}
                          <p className="text-sm font-light text-foreground">{product.price}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ProductCarousel;
