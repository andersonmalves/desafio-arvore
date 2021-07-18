export async function getBooks(query, max) {
  const ENDPOINT = `https://www.googleapis.com/books/v1/volumes?q=${ query }&startIndex=0&maxResults=${ max }`;
  try {
    const response = await fetch(ENDPOINT);
    const result = await response.json();
    return new Promise((resolve) => (
      resolve(result)
    ));
  } catch (error) {
    return new Promise((_resolve, reject) => (
      reject(new Error(error.message))
    ));
  }
}
