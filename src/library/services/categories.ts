export const fetchCategories = () => {
  return fetch('https://661ed74316358961cd92f0a0.mockapi.io/categories').then(res => res.json());
}