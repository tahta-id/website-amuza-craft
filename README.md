# amuza.craft — 3 halaman terpisah

Hasil pemecahan dari satu file `amuza-craft.html` menjadi beberapa file agar lebih mudah direvisi.
Tidak perlu server, build tool, atau instalasi apa pun.

## Struktur

```
amuza-craft/
├─ index.html            # Beranda
├─ katalog.html          # Katalog + filter momen
├─ produk.html           # Detail produk (produk.html?id=0 … 5)
├─ README.md             # panduan ini
├─ css/
│  ├─ base.css           # variabel warna, reset, tipografi, tombol, header, footer
│  ├─ components.css     # komponen dipakai ulang: badge, chip, kartu produk, page-hero, breadcrumb
│  ├─ home.css           # hero, momen, keunggulan, cara pesan, galeri, kontak (beranda)
│  ├─ catalog.css        # filter kategori, jumlah hasil, kotak pesanan custom
│  └─ product.css        # detail produk, ukuran, tambahan, form ucapan, ringkasan, kartu info
└─ js/
   ├─ data.js            # SEMUA data & pengaturan (nomor WA, produk, momen, ukuran, tambahan)
   ├─ helpers.js         # fungsi bantu, ilustrasi bunga SVG, kartu produk, tautan WhatsApp
   ├─ home.js            # render bagian dinamis beranda
   ├─ catalog.js         # filter & render katalog (mendukung ?momen=)
   └─ product.js         # render detail produk (mendukung ?id=)
```

## Cara membuka

Klik dua kali `index.html`, lalu gunakan menu di header. Semua halaman saling terhubung.

## Alamat halaman

| Halaman | URL |
|---|---|
| Beranda | `index.html` |
| Katalog | `katalog.html` |
| Katalog terfilter | `katalog.html?momen=Wisuda` |
| Detail produk | `produk.html?id=3` |
| Section di beranda | `index.html#cara-pesan`, `index.html#kontak` |

`?id=` mengikuti `id` pada data produk (0–5). Jika `id` kosong/tidak valid, halaman menampilkan produk pertama.

## Panduan revisi cepat

| Ingin mengubah | Edit file |
|---|---|
| Nomor WhatsApp, sapaan chat | `js/data.js` (`WA_NUMBER`, `WA_GREETING`) |
| Produk, kategori, harga, deskripsi, warna ilustrasi | `js/data.js` (`PRODUCTS`) |
| Kartu momen & filter katalog | `js/data.js` (`MOMENTS`) |
| Pilihan ukuran | `js/data.js` (`SIZES`) |
| Tambahan (kartu ucapan, pita) | `js/data.js` (`ADDONS`) |
| Teks beranda | `index.html` |
| Teks katalog | `katalog.html` |
| Teks detail produk & placeholder `[...]` | `produk.html` |
| Warna tema, font, jarak section | `css/base.css` (blok `:root` & utilitas) |
| Tampilan kartu produk / badge | `css/components.css` |
| Layout beranda | `css/home.css` |
| Layout katalog | `css/catalog.css` |
| Layout detail produk | `css/product.css` |
| Logika render / filter / detail | `js/home.js`, `js/catalog.js`, `js/product.js` |

## Catatan penting

- **Header dan footer ada di ketiga file HTML.** Kalau mengubah menu, logo, atau tautan footer,
  samakan perubahannya di `index.html`, `katalog.html`, dan `produk.html`.
- Setiap halaman memuat script dengan urutan: `data.js` → `helpers.js` → script halaman.
  `helpers.js` harus dimuat sebelum script halaman karena menyediakan fungsi `card()`, `flower()`, dan `waLink()`.
- Untuk menambah produk, cukup tambah objek baru di `PRODUCTS` dengan `id` unik. Kartu di beranda,
  katalog, rekomendasi, dan halaman `produk.html?id=...` otomatis ikut.
- File asli `../amuza-craft.html` tidak diubah, jadi masih bisa dipakai sebagai pembanding.
