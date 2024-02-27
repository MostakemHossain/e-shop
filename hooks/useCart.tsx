import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import toast from "react-hot-toast";

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void;
  handleRemoveProductFromCart: (product: CartProductType) => void;
};
export const CartContext = createContext<CartContextType | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [cartTotalQty, setCartTotalQty] = useState(0);
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(
    null
  );

  useEffect(() => {
    const cartItems: any = localStorage.getItem("eShopCartItems");
    const cartProducts: CartProductType[] | null = JSON.parse(cartItems);

    setCartProducts(cartProducts);
  }, []);

  const handleAddProductToCart = useCallback((product: CartProductType) => {
    setCartProducts((prev) => {
      let updatedCart;
      if (prev) {
        updatedCart = [...prev, product];
      } else {
        updatedCart = [product];
      }
      toast.success("Product added to cart");
      localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));

      return updatedCart;
    });
  }, []);

  const handleRemoveProductFromCart = useCallback((product: CartProductType) => {
    if (cartProducts) {
      const filterProducts = cartProducts.filter((item) => {
        return item.id !== product.id;
      });
      setCartProducts(filterProducts)
      toast.success("Product Removed");
      localStorage.setItem("eShopCartItems", JSON.stringify(filterProducts));
    }
  }, [cartProducts]);

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within a cartContextProvider");
  }

  return context;
};
