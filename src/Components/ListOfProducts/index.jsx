import { useProduct } from '../../hooks/useProduct'
import { Product } from '../Product'

import styles from './styles.module.css'
export const ListOfProducts = () => {
  const {products} = useProduct()

  return (
    <section className={styles.listOfProducts}>
      {products?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  )
}
