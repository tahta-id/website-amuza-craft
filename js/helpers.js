/* =========================================================
   HELPER & KOMPONEN UI
   Fungsi bantu, ilustrasi bunga (SVG), kartu produk,
   dan pembuat tautan WhatsApp.
   ========================================================= */

/* ===== util ===== */
const $ = (s, r=document) => r.querySelector(s);
const arrow = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2A1A24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const tick = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

/* ===== ilustrasi ===== */
function petals(fill){
  return '<ellipse rx="13" ry="26" fill="'+fill+'"/><ellipse rx="13" ry="26" fill="'+fill+'" transform="rotate(60)"/><ellipse rx="13" ry="26" fill="'+fill+'" transform="rotate(120)"/>';
}
function flower(p, label){
  return '<svg viewBox="0 0 200 250" '+(label?'role="img" aria-label="'+esc(label)+'"':'aria-hidden="true"')+'>'
   + '<g fill="#4F7F5E"><path d="M100 150 C72 124 52 114 40 84 C72 88 94 108 100 150Z"/><path d="M100 150 C128 122 150 112 162 82 C130 88 108 108 100 150Z"/></g>'
   + '<g stroke="rgba(42,26,36,.14)" stroke-width="1">'
   + '<g transform="translate(62 120) scale(.8)">'+petals(p.c2)+'</g>'
   + '<g transform="translate(138 120) scale(.8)">'+petals(p.c2)+'</g>'
   + '<g transform="translate(100 90)">'+petals(p.c1)+'</g></g>'
   + '<g fill="#F4C95D"><circle cx="62" cy="120" r="7"/><circle cx="138" cy="120" r="7"/><circle cx="100" cy="90" r="9"/></g>'
   + '<path d="M54 152 H146 L136 226 Q100 236 64 226 Z" fill="'+p.c3+'"/>'
   + '<rect x="48" y="144" width="104" height="14" rx="7" fill="'+p.c3+'" stroke="rgba(42,26,36,.18)"/>'
   + '<path d="M60 192 Q100 202 140 192" stroke="rgba(255,255,255,.75)" stroke-width="3" fill="none"/></svg>';
}

/* ===== kartu produk ===== */
function card(p){
  return '<a class="card" href="produk.html?id='+p.id+'"><div class="art" style="background:'+p.tint+'">'+flower(p)+'</div>'
   + '<div class="info"><span class="cat">'+esc(p.cat)+'</span><span class="name">'+esc(p.name)+'</span><span class="price">'+esc(p.price)+'</span></div></a>';
}

/* ===== tautan WhatsApp ===== */
function waLink(text){
  const msg = encodeURIComponent(text || WA_GREETING);
  return WA_NUMBER ? 'https://wa.me/'+WA_NUMBER+'?text='+msg : 'https://wa.me/?text='+msg;
}

/* pasang tautan WhatsApp ke semua tombol [data-wa] */
document.querySelectorAll('[data-wa]').forEach(a => a.href = waLink());
