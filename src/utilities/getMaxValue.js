export const getMaxValue = (products) => {
  let maxValue = -1
  products.map((product) => {
    if (product.price > maxValue) {
      maxValue = product.price
    }
  })
  return maxValue
}
