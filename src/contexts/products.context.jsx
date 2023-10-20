import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";
import PRODUCTS from "../shop-date.json";

export const ProductsContext = createContext({
  currentProduct: [],
  setCurrentProduct: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  //   useEffect(() => {
  //       if (user) {
  //         createUserDocumentFromAuth(user);
  //       }
  //       setCurrentUser(user);
  //     });
  //     return unsubscribe;
  //   }, []);
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
