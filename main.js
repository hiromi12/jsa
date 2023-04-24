/**
 * @author Hiromi Honda
 */

// Toggle
let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
  nav.classList.toggle("open");
  console.log("end");
}

mask.onclick = () => {
  nav.classList.toggle("open");
}
