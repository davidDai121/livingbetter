import { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, variant) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.id === product.id && item.variantId === variant.id
      );

      if (existingItemIndex > -1) {
        // Item already exists, maybe update quantity (optional, for now just ignore or notify)
        return prevCart; 
      }
      
      return [...prevCart, {
        id: product.id,
        name: product.name,
        variantId: variant.id,
        color: variant.color,
        price: variant.price,
        image: variant.image,
        quantity: 1
      }];
    });
  };

  const removeFromCart = (productId, variantId) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === productId && item.variantId === variantId)));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
