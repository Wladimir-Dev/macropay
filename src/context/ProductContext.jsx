import { createContext, useState } from 'react'
import { products as productsData } from '../mocks/products.json'
import { getMaxValue } from '../utilities/getMaxValue'

export const ProductContext = createContext()
export const ProductProvider = ({ children }) => {
  const [products] = useState(productsData)
  const [showFavorite, setShowFavorite] = useState(false)
  const MAX_VALUE = getMaxValue(products)
  const [filtros, setFiltros] = useState({
    marcas: [],
    minPrecio: 0,
    maxPrecio: MAX_VALUE,
    favoritos: [],
    categoria: '/',
    busqueda: '',
  })

  return (
    <ProductContext.Provider
      value={{
        products,
        filtros,
        setFiltros,
        MAX_VALUE,
        showFavorite,
        setShowFavorite,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
