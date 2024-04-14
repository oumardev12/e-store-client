export type labelTransitionType = {
  event: React.FormEvent<HTMLInputElement>;
  index: number;
  setActiveUsername?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  setActivePass?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  setActiveConf?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  setActiveTitle?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  setActiveEmail?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

export type userInfoType = {
  id: string;
  username: string;
};

export type cartItem = {
  id: number;
  quantity: number;
};

export type shoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;

  user: userInfoType;
  setUser: React.Dispatch<React.SetStateAction<userInfoType>>;
  showAuthModal: boolean;
  setShowAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  success: string;
  setSuccess: React.Dispatch<React.SetStateAction<string>>;

  cartQuantity: number;
  cartItems: cartItem[];
};

export interface UserInfo {
  id: string;
  username: string;
}

type purchaseType = {
  products: { product_id: string; quantity: string }[];
  purchase_at: string;
};

export type singleUserType = {
  id: string;
  username: string;
  created_at: string;
  purchases: purchaseType[];
};

export type checkoutType = {
  data: {
    address: string;
    email: string;
    firstName: string;
    lastName: string;
    shippingCountry: string;
    city: string;
    zipCode: string;
  };
  products: cartItem[];
};
