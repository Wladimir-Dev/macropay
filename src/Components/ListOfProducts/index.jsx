import { useProduct } from '../../hooks/useProduct'
import { Product } from '../Product'

import styles from './styles.module.css'
import tablet from './tablet.module.css'

export const ListOfProducts = () => {
  const { getFilterProducts } = useProduct()

  const products = getFilterProducts()

  return (
    <section className={`${styles.listOfProducts} ${tablet.listOfProducts}`}>
      {products.length > 0
      ?products?.map((product) => (
        <Product key={product.id} {...product} />
      ))
      :<h2>No hay resultados para la búsqueda</h2>
      }
    </section>
  )
}
