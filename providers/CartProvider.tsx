"use client"

import { CartContextProvider } from "@/hooks/useCart";

interface CartProviderProps{
    children:React.ReactNode
}
const CartProvider:React.FC<CartProviderProps> = ({children}) => {
    return (  
       
            <CartContextProvider>
                <div>
                {children}
                </div>
                </CartContextProvider>

       
    );
}
 
export default CartProvider;