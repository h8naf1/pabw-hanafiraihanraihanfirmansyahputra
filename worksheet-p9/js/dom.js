import { daftarProyek } from "./app.js";
const wadah = document.querySelector(".katalog");
const wadahFilter = document.querySelector(".filter-proyek");
let pilihanAktif = "semua";
function renderProyek() {
  wadah.textContent = "";

  const proyekTampil = daftarProyek.filter((proyek) => {
    if (pilihanAktif === "selesai") {
      return proyek.selesai === true;
    }

    if (pilihanAktif === "belum-selesai") {
      return proyek.selesai === false;
    }

    return true;
  });

  proyekTampil.forEach((proyek) => {
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

wadahFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button[data-filter]");

  if (!tombol) return;

  pilihanAktif = tombol.dataset.filter;

  wadahFilter.querySelectorAll("button").forEach((item) => {
    item.classList.toggle("aktif", item === tombol);
  });

  renderProyek();
});