import { createContext } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string) => void;
};

export const CartContext = createContext<CartContextType | null>(null);
