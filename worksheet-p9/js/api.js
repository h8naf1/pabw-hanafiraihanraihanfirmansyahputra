
const URL = "https://jsonplaceholder.typicode.com/posts";

export async function load() {
  const response = await fetch(URL);

  console.log("status:", response.status, "ok:", response.ok);
  console.log("content-type:", response.headers.get("content-type"));

  if (!response.ok) {
    throw new Error("status " + response.status);
  }

  return response.json();
}
