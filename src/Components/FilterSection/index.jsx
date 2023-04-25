import { useId } from 'react'
import styles from './styles.module.css'
import { ArrowIcon, FilterIcon } from '../Icons'
import { ListOfMarcas } from '../ListOfMarcas'
export const FilterSection = () => {
  const checkId = useId()
  const marcasId = useId()
 
  return (
    <section className={styles.filterSection}>
      <label htmlFor={checkId} className={styles.labelCheck}>
        <FilterIcon />
        <span> Filtros</span>
      </label>
      <input type='checkbox' name='' id={checkId} hidden />
      <div className={styles.options}>
        <section className={styles.marcas}>
          <label htmlFor={marcasId} className={styles.titleFilter}>
            Marcas <ArrowIcon />
          </label>
          <input type='checkbox' name='' id={marcasId} hidden />
          <ListOfMarcas />
        </section>
      </div>
    </section>
  )
}
