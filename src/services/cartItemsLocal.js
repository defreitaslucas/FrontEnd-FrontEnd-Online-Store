/* if (!JSON.parse(localStorage.getItem('cartItems'))) {
  localStorage.setItem('cartItems', JSON.stringify([]));
} */

const getProductsFromLocal = () => JSON.parse(localStorage.getItem('cartItems'));
const setProductToLocal = (newListProducts) => localStorage
  .setItem('cartItems', JSON.stringify(newListProducts));

const addProduct = (product) => {
  if (!JSON.parse(localStorage.getItem('cartItems'))) {
    localStorage.setItem('cartItems', JSON.stringify([]));
  }
  if (product) {
    const productsStored = getProductsFromLocal();
    setProductToLocal([...productsStored, product]);
  }
};

export default addProduct;
