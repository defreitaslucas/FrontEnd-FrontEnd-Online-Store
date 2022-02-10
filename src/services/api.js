export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestJson = await request.json();
  return requestJson;
}

export async function getProductsFromCategoryAndQuery(query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const requestJson = await request.json();
  return requestJson;
}

export async function getCategoryFromId(categoryID) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryID}`);
  const requestJson = await request.json();
  return requestJson;
}
