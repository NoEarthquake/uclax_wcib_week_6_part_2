const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const noButton = document.querySelector('.nobutton');

/* Looping through images */

for (let i = 1; i <= 5; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    displayedImage.src = e.target.src;
  }
}

/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark btn-warning') {
    btn.setAttribute('class', 'light btn-warning');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark btn-warning');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}

noButton.onclick = function() {
  location.reload();
}

window.onload = overlayFit;
window.onresize = overlayFit;

function overlayFit() {
  overlay.style.width = displayedImage.clientWidth + 'px';
  overlay.style.height = displayedImage.clientHeight + 'px';
}
