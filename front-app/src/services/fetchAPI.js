// export async function getBooks({ query, amount }) {
//   const ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=${amount}`;
//   try {
//     const response = await fetch(ENDPOINT);
//     const result = await response.json();
//     return new Promise((resolve) => (
//       resolve(result)
//     ));
//   } catch (error) {
//     return new Promise((_resolve, reject) => (
//       reject(new Error(error.message))
//     ));
//   }
// }

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export const getBooks = async ({ query, amount }) => {
  const resposta = await fetch(`${BASE_URL}${query}&startIndex=0&maxResults=${amount}`);
  const resultados = await resposta.json();
  return resultados.items;
};

