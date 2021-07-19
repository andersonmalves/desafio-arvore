export async function getBooks({ query, amount }) {
  const ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=${amount}`;
  try {
    const response = await fetch(ENDPOINT);
    const result = await response.json();
    return new Promise((resolve) => (
      resolve(result.items)
    ));
  } catch (error) {
    return new Promise((_resolve, reject) => (
      reject(new Error(error.message))
    ));
  }
}