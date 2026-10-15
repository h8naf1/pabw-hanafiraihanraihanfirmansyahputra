import { daftarProyek } from "./app.js";
const kosong = document.querySelector("#pesan-kosong");
const wadah = document.querySelector(".katalog");
const wadahFilter = document.querySelector(".filter-proyek");
let pilihanAktif = "semua";


const formFilm = document.querySelector("#form-film");
const inputJudul = document.querySelector("#judul-film");
const inputTahun = document.querySelector("#tahun-film");
const inputRating = document.querySelector("#rating-film");

const tombolKirim = formFilm.querySelector('[type="submit"]');

function renderProyek() {
  // 1. Kosongkan wadah terlebih dahulu
  wadah.textContent = "";

  // 2. Saring data sesuai tombol yang aktif
  const proyekTampil = daftarProyek.filter((proyek) => {
    if (pilihanAktif === "selesai") {
      return proyek.selesai === true;
    }

    if (pilihanAktif === "belum-selesai") {
      return proyek.selesai === false;
    }

    return true;
  });

  // 3. Tangani hasil filter yang kosong
  if (proyekTampil.length === 0) {
    kosong.hidden = false;
    return;
  }

  // 4. Sembunyikan pesan jika ada hasil
  kosong.hidden = true;

  // 5. Render semua kartu hasil filter
  proyekTampil.forEach((proyek) => {
    wadah.append(buatKartu(proyek));
  });
}


console.log("dom.js berhasil dimuat");

function buatKartu(proyek) {
  const kartu = document.createElement("figure");
  kartu.className = "kartu";
  kartu.textContent = proyek.judul;

  return kartu;
}


function validasiKolom(input) {
  const nilai = input.value.trim();
  const kolom = input.closest(".form-kolom");
  const pesan = kolom.querySelector(".pesan-galat");

  let galat = "";

  if (nilai === "") {
    galat = "Kolom ini wajib diisi.";
  } else if (
    input === inputTahun &&
    (!Number.isInteger(Number(nilai)) ||
      Number(nilai) < 1900 ||
      Number(nilai) > 2026)
  ) {
    galat = "Masukkan tahun antara 1900 dan 2026.";
  } else if (
    input === inputRating &&
    (!Number.isFinite(Number(nilai)) ||
      Number(nilai) < 1 ||
      Number(nilai) > 10)
  ) {
    galat = "Masukkan rating antara 1 dan 10.";
  }

  pesan.textContent = galat;

  if (galat) {
    input.setAttribute("aria-invalid", "true");
  } else {
    input.removeAttribute("aria-invalid");
  }

  return galat === "";
}


function validasiForm() {
  const hasil = [
    validasiKolom(inputJudul),
    validasiKolom(inputTahun),
    validasiKolom(inputRating),
  ];

  const sah = hasil.every(Boolean);
  tombolKirim.disabled = !sah;

  return sah;
}


[inputJudul, inputTahun, inputRating].forEach((input) => {
  input.addEventListener("input", () => {
    validasiKolom(input);
    validasiForm();
  });
});


formFilm.addEventListener("submit", (event) => {
  event.preventDefault();

  const sah = validasiForm();

  if (!sah) {
    const kolomSalah = formFilm.querySelector(
      '[aria-invalid="true"]'
    );

    kolomSalah?.focus();
    return;
  }

  console.log("Form valid. Siap diproses.");
});

renderProyek();

// render
wadahFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button[data-filter]");

  if (!tombol) return;

  pilihanAktif = tombol.dataset.filter;

  wadahFilter.querySelectorAll("button").forEach((item) => {
    item.classList.toggle("aktif", item === tombol);
  });

  renderProyek();
});
