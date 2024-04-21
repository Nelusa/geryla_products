export const fetchMeals = () => {
  return fetch('https://661ed74316358961cd92f0a0.mockapi.io/meals').then(res => res.json())
    .catch(error => {
      throw new Error('Error loading meals');
    })
}
