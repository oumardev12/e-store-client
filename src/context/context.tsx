import { ReactNode, createContext, useContext, useState } from "react";
import { useSessionStorage } from "../hooks/useSessionStorage";
import { cartItem, shoppingCartContext, userInfoType } from "../types/types";

const ShoppingCartContext = createContext({} as shoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

type shoppinCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartProvider = ({
  children,
}: shoppinCartProviderProps) => {
  const [user, setUser] = useSessionStorage<userInfoType>("user_info", {
    id: "",
    username: "",
  });
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [cartItems, setCartItems] = useSessionStorage<cartItem[]>(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce((q, item) => {
    return item.quantity + q;
  }, 0);

  const getItemQuantity = (id: number) => {
    return cartItems.find((i) => i.id === id)?.quantity || 0;
  };

  const increaseItemQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((i) => i.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseItemQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((i) => i.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        user,
        setUser,
        showAuthModal,
        setShowAuthModal,
        error,
        setError,
        success,
        setSuccess,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
