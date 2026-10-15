import { daftarProyek } from "./app.js";
const wadah = document.querySelector(".katalog");
function renderProyek() {
  wadah.textContent = "";

  daftarProyek.forEach((proyek) => {
    const kartu = buatKartu(proyek);
    wadah.append(kartu);
  });
}
console.log("dom.js berhasil dimuat");

function buatKartu(proyek) {
  const kartu = document.createElement("figure");
  kartu.className = "kartu";
  kartu.textContent = proyek.judul;

  return kartu;
}

renderProyek();