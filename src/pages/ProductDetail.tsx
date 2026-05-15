import { useParams, Link, useSearchParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductImageGallery from "../components/product/ProductImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductDescription from "../components/product/ProductDescription";
import ProductCarousel from "../components/content/ProductCarousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getProductById } from "@/lib/products";
import { ProductColorProvider } from "@/lib/productColorContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const [searchParams] = useSearchParams();
  const product = getProductById(productId || 1);
  const colorParam = searchParams.get("color");
  const initialColorId =
    (colorParam && product.colorVariants?.find((v) => v.id === colorParam)?.id) ||
    product.colorVariants?.[0]?.id ||
    null;

  return (
    <ProductColorProvider initialColorId={initialColorId}>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-6">
          <section className="w-full px-6">
            <div className="lg:hidden mb-6">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <ProductImageGallery />

              <div className="lg:pl-12 mt-8 lg:mt-0 lg:sticky lg:top-6 lg:h-fit">
                <ProductInfo />
                <ProductDescription productName={product.name} />
              </div>
            </div>
          </section>

          <section className="w-full mt-16 lg:mt-24">
            <div className="mb-4 px-6">
              <h2 className="text-sm font-light text-foreground">Вам также может понравиться</h2>
            </div>
            <ProductCarousel currentProductId={product.id} />
          </section>
        </main>

        <Footer />
      </div>
    </ProductColorProvider>
  );
};

export default ProductDetail;
