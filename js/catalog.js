/* =========================================================
   KATALOG (katalog.html)
   Filter berdasarkan kategori/momen dan render daftar produk.
   Mendukung tautan katalog.html?momen=Wisuda
   ========================================================= */

const KATEGORI = ['Semua'].concat(MOMENTS.map(m => m.label));
let activeCat = 'Semua';

/* baca filter awal dari URL */
const momenAwal = new URLSearchParams(location.search).get('momen');
if(momenAwal && KATEGORI.includes(momenAwal)) activeCat = momenAwal;

function renderCatalog(){
  $('#filters').innerHTML = KATEGORI.map(c =>
    '<button type="button" class="filter" aria-pressed="'+(c===activeCat)+'" data-cat="'+esc(c)+'">'+esc(c)+'</button>').join('');
  const list = activeCat==='Semua' ? PRODUCTS : PRODUCTS.filter(p => p.cat===activeCat);
  $('#catalog').innerHTML = list.map(card).join('');
  $('#count').textContent = list.length + ' rangkaian';
}

/* klik tombol filter */
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('[data-cat]'); if(!b) return;
  activeCat = b.dataset.cat;
  renderCatalog();
});

renderCatalog();
