import styles from './styles.module.css'
import { useProduct } from '../../hooks/useProduct'
import { Marca } from '../Marca'
import { ArrowIcon } from '../Icons'
export const ListOfMarcas = () => {

  const { getMarcas } = useProduct()
  const marcas = getMarcas()
  
  return (
    <section className={styles.listOfMarcas}>
      <label  className={styles.titleFilter}>
        Marcas <ArrowIcon />
      </label>
      
      <section className={styles.marcas}>
        {marcas.map((marca) => (
          <Marca key={marca.id} marca={marca} />
        ))}
      </section>
    </section>
  )
}
