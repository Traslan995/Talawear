import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { PRODUCTS } from "@/lib/products";

type Entry = {
  key: string;
  productId: number;
  colorId?: string;
  name: string;
  price: string;
  originalPrice?: string;
  discountPercent?: number;
  image: string;
  altImage: string;
  isNew?: boolean;
};

const entries: Entry[] = PRODUCTS.flatMap((p) => {
  if (!p.colorVariants || p.colorVariants.length === 0) {
    return [{
      key: String(p.id),
      productId: p.id,
      name: p.name,
      price: p.price,
      originalPrice: p.originalPrice,
      discountPercent: p.discountPercent,
      image: p.image,
      altImage: p.altImage,
      isNew: p.isNew,
    }];
  }
  return p.colorVariants.map((v) => {
    const imgs = v.images && v.images.length > 0 ? v.images : [p.image, p.altImage];
    return {
      key: `${p.id}-${v.id}`,
      productId: p.id,
      colorId: v.id,
      name: p.name,
      price: v.price ?? p.price,
      originalPrice: v.originalPrice ?? p.originalPrice,
      discountPercent: v.discountPercent ?? p.discountPercent,
      image: imgs[0],
      altImage: imgs[1] ?? imgs[0],
      isNew: v.isNew,
    };
  });
});

entries.sort((a, b) => {
  const aDisc = a.discountPercent ? 1 : 0;
  const bDisc = b.discountPercent ? 1 : 0;
  if (bDisc !== aDisc) return bDisc - aDisc;
  const aNew = a.isNew ? 1 : 0;
  const bNew = b.isNew ? 1 : 0;
  return bNew - aNew;
});

const Shop = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-6">
        <section className="w-full px-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-light text-foreground">Каталог</h1>
          <p className="mt-2 text-sm font-light text-muted-foreground">
            {entries.length} {entries.length === 1 ? "товар" : "товаров"}
          </p>
        </section>

        <section className="w-full px-6 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {entries.map((entry) => (
              <Link
                key={entry.key}
                to={
                  entry.colorId
                    ? `/product/${entry.productId}?color=${entry.colorId}`
                    : `/product/${entry.productId}`
                }
              >
                <Card className="border-none shadow-none bg-transparent group cursor-pointer">
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] mb-3 overflow-hidden bg-muted/10 relative">
                      <img
                        src={entry.image}
                        alt={entry.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-0"
                      />
                      <img
                        src={entry.altImage}
                        alt={`${entry.name} — деталь`}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-300 opacity-0 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/[0.03]"></div>
                      
                      {entry.discountPercent ? (
                        <div className="absolute top-2 right-2 px-2 py-1 text-xs font-medium text-white bg-destructive">
                          −{entry.discountPercent}%
                        </div>
                      ) : entry.isNew ? (
                        <div className="absolute top-2 right-2 px-2 py-1 text-[10px] tracking-[0.2em] uppercase font-light text-foreground bg-background/90">
                          New
                        </div>
                      ) : null}
                    </div>
                    <div className="pt-2 pb-8">
                      <h3 className="text-sm font-light tracking-wide text-foreground/80 leading-snug mb-4">{entry.name}</h3>
                      <div className="flex items-baseline gap-2">
                        {entry.originalPrice && (
                          <p className="text-xs font-light text-muted-foreground line-through">{entry.originalPrice}</p>
                        )}
                        <p className="text-sm font-light tracking-wider text-[hsl(0_35%_35%)]">{entry.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
