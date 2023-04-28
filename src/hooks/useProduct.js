import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

export const useProduct = () => {
  const {
    products,
    filtros,
    setFiltros,
    MAX_VALUE,
    showFavorite,
    setShowFavorite,
  } = useContext(ProductContext)

  //Los productos a mostrar son filtrados
  // por las categorias o por ser favoritos
  const getFilterProducts = () => {
    return products.filter((product) => {
      return showFavorite
        ? filtros.favoritos.includes(product.id)
        : product.price >= filtros.minPrecio &&
            product.price <= filtros.maxPrecio &&
            (filtros.categoria == product.category ||
              filtros.categoria == '/') &&
            (product.title
              .toUpperCase()
              .includes(filtros.busqueda.toUpperCase()) ||
              filtros.busqueda == '') &&
            (filtros.marcas.includes(product.brand) ||
              filtros.marcas.length == 0)
    })
  }
  //Los productos a mostrar son filtrados
  // por alguna de sus propiedades ejm: marca, categoria
  const getProductsRelation = (idProduct, categoryId) => {
    return products.filter(
      (product) => product.category == categoryId && product.id != idProduct
    )
  }
  //Retona un producto en específico
  const getProduct = (id) => {
    return products.find((product) => product.id == id)
  }
  //Retorna de los productos  los valores de
  // la propiedad pasada por parametro sin repetirlos
  //ejm: marcas que se encuentran el los productos
  const getCollection = (key) => {
    return products.filter(
      (product, index, self) =>
        index === self.findIndex((t) => t[key] === product[key])
    )
  }
  //elimina una marca a filtrar
  const removeMarca = (id) => {
    const newMarcas = filtros.marcas.filter((marca) => marca != id)
    setFiltros((prev) => ({ ...prev, marcas: newMarcas }))
  }
  //elimina un producto de la seccion favoritos
  const removeFavProduct = (id) => {
    const newFavorito = filtros.favoritos.filter((favorito) => favorito != id)
    setFiltros((prev) => ({ ...prev, favoritos: newFavorito }))
  }
   //agregar un producto a la seccion favoritos
  const addFavProduct = (id) => {
    let copia = filtros
    copia.favoritos.push(id)
    setFiltros((prev) => ({ ...prev, favoritos: copia.favoritos }))
  }
  return {
    products,
    getCollection,
    getFilterProducts,
    removeMarca,
    setFiltros,
    filtros,
    MAX_VALUE,
    showFavorite,
    setShowFavorite,
    removeFavProduct,
    addFavProduct,
    getProduct,
    getProductsRelation,
  }
}
