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


const daftarProyek = [
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