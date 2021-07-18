export async function getBooks() {
  const ENDPOINT = 'https://www.googleapis.com/books/v1/volumes?q=Query&startIndex=0&maxResults=10';
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
