
var btnAbrirPopup = document.getElementById("btn-abrir-popupC4"),
  overlayc4 = document.getElementById("overlayC4"),
  popupc4 = document.getElementById("popupC4"),
  btnCerrarPopup = document.getElementById("btn-cerrar-popupC4");

var btnAbrirPopupMG = document.getElementById("btn-abrir-popupMG"),
  overlaymg = document.getElementById("overlayMG"),
  popupmg = document.getElementById("popupMG"),
  btnCerrarPopupMG = document.getElementById("btn-cerrar-popupMG");

var btnAbrirPopupTA = document.getElementById("btn-abrir-popupMG"),
  overlayta = document.getElementById("overlayTA"),
  popupta = document.getElementById("popupTA"),
  btnCerrarPopupTA = document.getElementById("btn-cerrar-popupTA");

btnAbrirPopup.addEventListener("click", function() {
  overlayc4.classList.add("active");
  popupc4.classList.add("active");
});

btnCerrarPopup.addEventListener("click", function(e) {
  e.preventDefault();
  overlayc4.classList.remove("active");
  popupc4.classList.remove("active");
});

btnAbrirPopup.addEventListener("click", function() {
  overlayc4.classList.add("active");
  popupc4.classList.add("active");
});

btnCerrarPopup.addEventListener("click", function(e) {
  e.preventDefault();
  overlayc4.classList.remove("active");
  popupc4.classList.remove("active");
});

btnAbrirPopupMG.addEventListener("click", function() {
  overlaymg.classList.add("active");
  popupmg.classList.add("active");
});

btnCerrarPopupMG.addEventListener("click", function(e) {
  e.preventDefault();
  overlaymg.classList.remove("active");
  popupmg.classList.remove("active");
});
