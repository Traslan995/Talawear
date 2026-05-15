import { createContext, useContext, useState, ReactNode } from "react";

interface Ctx {
  selectedColorId: string | null;
  setSelectedColorId: (id: string) => void;
}

const ProductColorContext = createContext<Ctx | undefined>(undefined);

export const ProductColorProvider = ({
  initialColorId,
  children,
}: {
  initialColorId: string | null;
  children: ReactNode;
}) => {
  const [selectedColorId, setSelectedColorId] = useState<string | null>(initialColorId);
  return (
    <ProductColorContext.Provider value={{ selectedColorId, setSelectedColorId }}>
      {children}
    </ProductColorContext.Provider>
  );
};

export const useProductColor = () => {
  const ctx = useContext(ProductColorContext);
  if (!ctx) return { selectedColorId: null, setSelectedColorId: () => {} };
  return ctx;
};
