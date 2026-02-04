
const slides = document.querySelectorAll(".slide");
const dotsBox = document.querySelector(".dots");
let i = 0;

// créer les points
slides.forEach((_, idx) => {
  const b = document.createElement("button");
  if(idx===0) b.classList.add("active");
  b.onclick = () => show(idx);
  dotsBox.appendChild(b);
});

const dots = dotsBox.querySelectorAll("button");

function show(n){
  slides[i].classList.remove("active");
  dots[i].classList.remove("active");
  i = (n + slides.length) % slides.length;
  slides[i].classList.add("active");
  dots[i].classList.add("active");
}

document.querySelector(".next").onclick = () => show(i+1);
document.querySelector(".prev").onclick = () => show(i-1);

