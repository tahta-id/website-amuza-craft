/* =========================================================
   BERANDA (index.html)
   Mengisi bagian dinamis di halaman beranda.
   ========================================================= */

/* ilustrasi utama */
$('#hero-flower').innerHTML = flower(PRODUCTS[0]);

/* kartu momen -> buka katalog terfilter */
$('#moments').innerHTML = MOMENTS.map(m =>
  '<a class="moment" href="katalog.html?momen='+encodeURIComponent(m.label)+'" style="background:'+m.bg+'"><b>'+esc(m.label)+'</b><span style="color:'+m.fg+'"><span>'+esc(m.note)+'</span>'+arrow+'</span></a>').join('');

/* produk unggulan (3 pertama) */
$('#featured').innerHTML = PRODUCTS.slice(0,3).map(card).join('');

/* galeri Instagram */
$('#gallery').innerHTML = PRODUCTS.map(p => '<div style="background:'+p.tint+'">'+flower(p)+'</div>').join('');
