document.addEventListener('click', function(e){
  var t = e.target;
  if (t.classList && t.classList.contains('copy-phone')) {
    var num = t.dataset.number;
    var btn = t;
    navigator.clipboard?.writeText(num)
      .then(function(){ btn.textContent='Kopiert'; setTimeout(function(){ btn.textContent='Kopieren' },2000) })
      .catch(function(){ prompt('Nummer kopieren (STRG+C):', num) });
  }
});
