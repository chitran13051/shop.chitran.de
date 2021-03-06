import React, { createContext, useReducer } from "react"
import { initialState, productReducer } from "../redux/reducer/productReducer"

export const CartContext = createContext()

export default function CartContextLayout({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState)

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  )
}
