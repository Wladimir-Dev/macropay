import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

export const useProduct = () => {
  const {products} = useContext(ProductContext)

  const getMarcas = () => {
    let auxMarcas

    // filtro para no tener categorías repetidas
    auxMarcas = products.filter(
      (product, index, self) =>
        index === self.findIndex((t) => t.brand === product.brand)
    )

    return auxMarcas
  }
  return {products, getMarcas}
}
