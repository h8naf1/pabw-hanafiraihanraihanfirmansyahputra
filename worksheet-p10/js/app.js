import { fetchNews } from "./api.js";
// B.1 — Data profil dan tipe nilai
const namaLengkap = "Hanafi Raihan Firmansyah Putra";
const peran = "Belajar full-stack web developer";
const keahlian = ["HTML", "CSS", "JavaScript", "React", "Next.js", "PHP", "Laravel"];
const jumlahProyek = 2;

let pilihanAktif = "semua";

// Data profil dikelompokkan menjadi satu object
const profil = {
  nama: namaLengkap,
  peran: peran,
  keahlian: keahlian,
  jumlahProyek: jumlahProyek,
};

// B.2 — Template literal
const kalimat = `Nama saya ${profil.nama}. Saya ${profil.peran}, menguasai ${profil.keahlian.length} keahlian, dan sudah membuat ${profil.jumlahProyek} proyek.`;

// B.1 — Periksa tipe data
console.log(typeof profil.nama);
console.log(typeof profil.jumlahProyek);
console.log(typeof belumDibuat);


console.log(profil);
console.log(kalimat);



function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}


const formatKeahlian = (daftar) => daftar.join(" · ");
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

// Uji buatPerkenalan dengan tiga object berbeda
console.log(buatPerkenalan(profil));
console.log(
  buatPerkenalan({
    nama: profil.nama,
    peran: "Mahasiswa yang sedang belajar JavaScript",
  })
);
console.log(
  buatPerkenalan({
    nama: profil.nama,
    peran: "Calon full-stack web developer",
  })
);

// Uji formatKeahlian dengan tiga array berbeda
console.log(formatKeahlian(profil.keahlian));
console.log(formatKeahlian(["HTML", "CSS"]));
console.log(formatKeahlian(["JavaScript"]));


export const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Katalog Produk", tahun: 2026, selesai: false },
];

console.log(profil.nama);
console.log(daftarProyek[0]);
console.log(daftarProyek[0].judul);
console.log(profil["nama"]);


// Salinan object
const salinan = { ...profil };

// Salin array sebelum mengurutkannya
const urut = [...daftarProyek].sort((a, b) => a.tahun - b.tahun);

// filter untuk menyaring, bukan map
const proyekKatalog = daftarProyek.filter(
  (proyek) => proyek.judul === "Katalog Produk"
);

// Gunakan indeks angka
console.log(daftarProyek[0]);


console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const katalog = daftarProyek.find(
  (proyek) => proyek.judul === "Katalog Produk"
);
console.log(katalog);

const judulProyek = daftarProyek.map((proyek) => proyek.judul);
console.log(judulProyek);

const jumlahProyekTerhitung = daftarProyek.reduce(
  (jumlah) => jumlah + 1,
  0
);
console.log(jumlahProyekTerhitung);
console.log(namaLengkap);
console.table(profil.keahlian);

// F.2 — Render data API dan empty state
export function render(list) {
  const containerAPI = document.querySelector("#list");
  const statusAPI = document.querySelector("#status-api");

  if (!containerAPI || !statusAPI) {
    console.error("Elemen #list atau #status-api tidak ditemukan.");
    return;
  }

  containerAPI.textContent = "";

  if (list.length === 0) {
    statusAPI.textContent = "Belum ada data.";
    return;
  }

  list.forEach((item) => {
    const card = document.createElement("article");
    const heading = document.createElement("h3");
    const body = document.createElement("p");

    heading.textContent = item.title;
    body.textContent = item.body;

    card.append(heading, body);
    containerAPI.appendChild(card);
  });

  statusAPI.textContent = "Data berhasil dimuat.";
}


async function tampilkanNews() {
  const containerAPI = document.querySelector("#list");
  const statusAPI = document.querySelector("#status-api");

  if (!containerAPI || !statusAPI) {
    console.error("Elemen #list atau #status-api tidak ditemukan.");
    return;
  }

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
