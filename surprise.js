const btn = document.getElementById("moreBtn");
const msg = document.getElementById("hiddenMessage");

btn.onclick = () => {

msg.classList.add("show");

btn.style.display = "none";

};
