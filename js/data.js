/* =========================================================
   PENGATURAN & DATA
   Semua yang biasanya perlu diubah ada di file ini.
   ========================================================= */

/* Nomor WhatsApp: format internasional, tanpa + atau spasi.
   Contoh: "6281234567890". Kosongkan ("") untuk memakai
   pemilih kontak bawaan WhatsApp. */
const WA_NUMBER = "";
const WA_GREETING = "Halo amuza.craft, saya ingin memesan bucket flower.";

/* Daftar produk. Tambah/ubah objek di sini; kartu, katalog,
   detail, dan rekomendasi akan ikut menyesuaikan. */
const PRODUCTS = [
  { id:0, name:"Rosé Garden",    cat:"Ulang Tahun",    price:"Rp [harga]", c1:"#E78AA8", c2:"#F6C1D0", c3:"#D9C6E8", tint:"#FBE3E8", desc:"Rangkaian bunga bernuansa pink lembut dalam bucket lilac. Cocok untuk ulang tahun, kejutan kecil, atau sekadar bilang terima kasih." },
  { id:1, name:"Peony Cloud",    cat:"Anniversary",    price:"Rp [harga]", c1:"#F2A6B5", c2:"#FFF4EE", c3:"#F3D9C4", tint:"#F8E7B5", desc:"Warna krem dan peach yang hangat untuk merayakan perjalanan berdua." },
  { id:2, name:"Sunny Daisy",    cat:"Sekadar Hadiah", price:"Rp [harga]", c1:"#FFFFFF", c2:"#FFF4EE", c3:"#BFD8F0", tint:"#E3EDE0", desc:"Rangkaian segar dan ceria, pas untuk hadiah tanpa alasan khusus." },
  { id:3, name:"Lilac Whisper",  cat:"Wisuda",         price:"Rp [harga]", c1:"#B79CD8", c2:"#DCC8EE", c3:"#F6C1D0", tint:"#ECE3F4", desc:"Nuansa ungu lembut yang elegan untuk merayakan hari kelulusan." },
  { id:4, name:"Tulip Blush",    cat:"Ulang Tahun",    price:"Rp [harga]", c1:"#F58BA0", c2:"#FFC9A8", c3:"#F3D9C4", tint:"#FBE3E8", desc:"Perpaduan pink dan peach yang manis dan penuh semangat." },
  { id:5, name:"Graduation Joy", cat:"Wisuda",         price:"Rp [harga]", c1:"#F2C14E", c2:"#E78AA8", c3:"#D9C6E8", tint:"#ECE3F4", desc:"Kombinasi kuning dan pink yang meriah untuk hari besar sang wisudawan." }
];

/* Kartu momen di beranda sekaligus jadi filter di katalog. */
const MOMENTS = [
  { label:"Wisuda",         note:"Rayakan kerja kerasnya", bg:"#ECE3F4", fg:"#4A3A55" },
  { label:"Ulang Tahun",    note:"Kejutan yang manis",     bg:"#FBE3E8", fg:"#6A3447" },
  { label:"Anniversary",    note:"Untuk yang selalu ada",  bg:"#F8E7B5", fg:"#5C4A12" },
  { label:"Sekadar Hadiah", note:"Tanpa alasan khusus",    bg:"#E3EDE0", fg:"#35523F" }
];

/* Pilihan ukuran di halaman detail produk. */
const SIZES = [
  { label:"Small",  note:"[jumlah tangkai]" },
  { label:"Medium", note:"[jumlah tangkai]" },
  { label:"Large",  note:"[jumlah tangkai]" }
];

/* Tambahan opsional di halaman detail produk. */
const ADDONS = [
  { key:"card",   label:"Kartu ucapan",       note:"Pesanmu dicetak dan diselipkan di rangkaian" },
  { key:"ribbon", label:"Pita warna pilihan", note:"Sesuaikan warna pita dengan tema acara" }
];
