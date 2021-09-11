var btnAbrirPopup = document.getElementById("btn-abrir-popupMG"),
  overlay = document.getElementById("overlayMG"),
  popup = document.getElementById("popupMG"),
  btnCerrarPopup = document.getElementById("btn-cerrar-popup");

var btnAbrirPopup = document.getElementById("btn-abrir-popupC4"),
  overlay = document.getElementById("overlayC4"),
  popup = document.getElementById("popupC4"),
  btnCerrarPopup = document.getElementById("btn-cerrar-popup");

btnAbrirPopup.addEventListener("click", function() {
  overlay.classList.add("active");
  popup.classList.add("active");
});

btnCerrarPopup.addEventListener("click", function(e) {
  e.preventDefault();
  overlay.classList.remove("active");
  popup.classList.remove("active");
});
