const boton_open = document.getElementById("open");
const boton_close = document.getElementById("close");
const nav_button_open = document.getElementById("nav-button-open").classList;
const nav_button_close = document.getElementById("nav-button-close").classList;
const sobremi = document.getElementById("sobremi");
const expe = document.getElementById("expe");
const proy = document.getElementById("proy");
const hab = document.getElementById("hab");
const uni = document.getElementById("uni");
const curr = document.getElementById("curr");

boton_open.addEventListener("click", function () {
  const clas_nav = document.getElementById("nav").classList;
  clas_nav.remove("hidden");
  nav_button_open.add("hidden");
  nav_button_close.remove("hidden");
});

boton_close.addEventListener("click", function () {
  const clas_nav = document.getElementById("nav").classList;
  clas_nav.add("hidden");
  nav_button_close.add("hidden");
  nav_button_open.remove("hidden");
});

sobremi.addEventListener("click", function () {
  const clas_nav = document.getElementById("nav").classList;
  clas_nav.add("hidden");
  nav_button_close.add("hidden");
  nav_button_open.remove("hidden");
});

expe.addEventListener("click", function () {
  const clas_nav = document.getElementById("nav").classList;
  clas_nav.add("hidden");
  nav_button_close.add("hidden");
  nav_button_open.remove("hidden");
});

proy.addEventListener("click", function () {
  const clas_nav = document.getElementById("nav").classList;
  clas_nav.add("hidden");
  nav_button_close.add("hidden");
  nav_button_open.remove("hidden");
});

hab.addEventListener("click", function () {
  const clas_nav = document.getElementById("nav").classList;
  clas_nav.add("hidden");
  nav_button_close.add("hidden");
  nav_button_open.remove("hidden");
});

uni.addEventListener("click", function () {
  const clas_nav = document.getElementById("nav").classList;
  clas_nav.add("hidden");
  nav_button_close.add("hidden");
  nav_button_open.remove("hidden");
});

curr.addEventListener("click", function () {
  const clas_nav = document.getElementById("nav").classList;
  clas_nav.add("hidden");
  nav_button_close.add("hidden");
  nav_button_open.remove("hidden");
});
