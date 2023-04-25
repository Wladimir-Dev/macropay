import { useProduct } from '../../hooks/useProduct'
import { Product } from '../Product'

import styles from './styles.module.css'
import tablet from './tablet.module.css'

export const ListOfProducts = () => {
  const {products} = useProduct()

  return (
    <section className={`${styles.listOfProducts} ${tablet.listOfProducts}`}>
      {products?.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  )
}
