
var btnAbrirPopup = document.getElementById("btn-abrir-popupC4"),
  overlayc4 = document.getElementById("overlayC4"),
  popupc4 = document.getElementById("popupC4"),
  btnCerrarPopup = document.getElementById("btn-cerrar-popupC4");

var btnAbrirPopupMG = document.getElementById("btn-abrir-popupMG"),
  overlaymg = document.getElementById("overlayMG"),
  popupmg = document.getElementById("popupMG"),
  btnCerrarPopupMG = document.getElementById("btn-cerrar-popupMG");

var btnAbrirPopupTA = document.getElementById("btn-abrir-popupTA"),
  overlayta = document.getElementById("overlayTA"),
  popupta = document.getElementById("popupTA"),
  btnCerrarPopupTA = document.getElementById("btn-cerrar-popupTA");




btnAbrirPopupTA.addEventListener("click", function() {
  overlayta.classList.add("active");
  popupta.classList.add("active");
});

btnCerrarPopupTA.addEventListener("click", function(e) {
  e.preventDefault();
  overlayta.classList.remove("active");
  popupta.classList.remove("active");
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

var btnAbrirPopupWP = document.getElementById("btn-abrir-popupWP"),
  overlaywp = document.getElementById("overlayWP"),
  popupwp = document.getElementById("popupWP"),
  btnCerrarPopupWP = document.getElementById("btn-cerrar-popupWP");

btnAbrirPopupWP.addEventListener("click", function() {
  overlaywp.classList.add("active");
  popupwp.classList.add("active");
});

btnCerrarPopupWP.addEventListener("click", function(e) {
  e.preventDefault();
  overlaywp.classList.remove("active");
  popupwp.classList.remove("active");
});