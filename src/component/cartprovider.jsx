import { createContext, useContext, useState } from "react"

const CartContext = createContext({
  cart: []
})

export const useCart = () => useContext(CartContext)

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider