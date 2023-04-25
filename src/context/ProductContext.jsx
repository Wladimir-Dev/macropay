import { createContext, useState } from 'react'
import { products as productsData } from '../mocks/products.json'

export const ProductContext = createContext()
export const ProductProvider = ({ children }) => {
  const [products] = useState(productsData)
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  )
}
