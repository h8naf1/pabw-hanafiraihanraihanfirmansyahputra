
import { fetchNews } from "./api.js";

const URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchNews() {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("status " + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("failed to load", error.message);
    throw error;
  }
}


const containerAPI = document.querySelector("#list");
const statusAPI = document.querySelector("#status-api");

function render(list) {
  containerAPI.textContent = "";

  if (list.length === 0) {
    statusAPI.textContent = "Belum ada data.";
    return;
  }

  list.forEach((n) => {
    const card = document.createElement("article");
    const heading = document.createElement("h3");
    const body = document.createElement("p");

    heading.textContent = n.title;
    body.textContent = n.body;

    card.append(heading, body);
    containerAPI.appendChild(card);
  });

  statusAPI.textContent = "Data berhasil dimuat.";
}

async function tampilkanNews() {
  statusAPI.textContent = "Memuat data...";

  try {
    const data = await fetchNews();
    render(data);
  } catch (error) {
    containerAPI.textContent = "";
    statusAPI.textContent = "Gagal memuat data: " + error.message;
  }
}

tampilkanNews();

