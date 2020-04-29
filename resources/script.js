let openNav = false;
function showNav() {
  if (!openNav) {
    document.getElementById("navbar").classList.add("open");
    openNav = true;
  } else {
    document.getElementById("navbar").classList.remove("open");
    openNav = false;
  }
}
function selected() {
  document.getElementById("navbar").classList.remove("open");
  openNav = false;
}
