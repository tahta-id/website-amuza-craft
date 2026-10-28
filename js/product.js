/* =========================================================
   DETAIL PRODUK (produk.html)
   Membaca ?id= dari URL, menampilkan produk, ukuran,
   tambahan, ringkasan pesanan, dan tautan WhatsApp.
   ========================================================= */

const idAwal = Number(new URLSearchParams(location.search).get('id'));
let cur = PRODUCTS.find(p => p.id === idAwal) || PRODUCTS[0];
let sel = {size:'Medium', card:true, ribbon:false};

function summaryText(){
  const extra = [];
  if(sel.card) extra.push('kartu ucapan');
  if(sel.ribbon) extra.push('pita warna pilihan');
  return cur.name+' · '+sel.size+(extra.length ? ' · '+extra.join(', ') : '');
}

function renderDetail(){
  document.title = cur.name+' — amuza.craft';
  $('#crumb-name').textContent = cur.name;
  $('#d-cat').textContent = cur.cat;
  $('#d-name').textContent = cur.name;
  $('#d-price').textContent = cur.price;
  $('#d-desc').textContent = cur.desc;
  $('#d-frame').style.background = cur.tint;
  $('#d-frame').innerHTML = flower(cur, 'Ilustrasi bucket flower '+cur.name);
  $('#d-sizes').innerHTML = SIZES.map(s =>
    '<button type="button" class="size" data-size="'+s.label+'" aria-pressed="'+(s.label===sel.size)+'"><b>'+s.label+'</b><span>'+s.note+'</span></button>').join('');
  $('#d-addons').innerHTML = ADDONS.map(a =>
    '<button type="button" class="addon" data-addon="'+a.key+'" aria-pressed="'+!!sel[a.key]+'"><span><b>'+a.label+'</b><small>'+a.note+'</small></span><span class="box">'+tick+'</span></button>').join('');
  $('#d-sum').textContent = summaryText();
  updateOrderLink();
  $('#related').innerHTML = PRODUCTS.filter(p => p.id!==cur.id).slice(0,3).map(card).join('');
}

function updateOrderLink(){
  const note = $('#ucapan').value.trim();
  const txt = 'Halo amuza.craft, saya ingin memesan: '+summaryText()+(note ? '. Ucapan: "'+note+'"' : '')+'.';
  $('#d-order').href = waLink(txt);
}

/* interaksi */
$('#d-sizes').addEventListener('click', e => { const b=e.target.closest('[data-size]'); if(!b) return; sel.size=b.dataset.size; renderDetail(); });
$('#d-addons').addEventListener('click', e => { const b=e.target.closest('[data-addon]'); if(!b) return; sel[b.dataset.addon]=!sel[b.dataset.addon]; renderDetail(); });
$('#ucapan').addEventListener('input', updateOrderLink);

/* render awal */
renderDetail();
