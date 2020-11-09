const bottleHidden = document.querySelector('.bottleHidden');
const btn = document.querySelector('button');
const reloadButton = document.querySelector('.reloadbutton');

const para1 = document.querySelector('.para1');
const para2 = document.querySelector('.para2');
const para3 = document.querySelector('.para3');
const para4 = document.querySelector('.para4');
const para5 = document.querySelector('.para5');
const stack = document.querySelector('.stackTop');


btn.onclick = function() {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'btn btn-danger btn-switch') {
    btn.setAttribute('class', 'btn btn-danger btn-switched');
    stack.setAttribute('class', 'col-md-5 p-lg-5 mx-auto my-5 py-5 stackTop transl');
    para1.innerHTML = "IT'S FISH OIL";
    para2.innerHTML = 'OH YES';
    para3.innerHTML = 'OH YES';
    para4.innerHTML = 'OH YES';
    para5.innerHTML = "It's what you've always wanted";
    console.log(para1);
    btn.textContent = 'I HATE THIS!';
    btn.setAttribute('data-toggle', 'modal');
    bottleHidden.src = "images/FishOil.jpg";
  } else {
    btn.setAttribute('class', 'btn btn-danger btn-switch');
    stack.setAttribute('class', 'col-md-5 p-lg-5 mx-auto my-5 py-5 stackTop');
    para1.innerHTML = "IT'S HERE";
    para2.innerHTML = "IT'S HOT";
    para3.innerHTML = "IT'S SEXY";
    para4.innerHTML = "IT'S MYSTERIOUS";
    para5.innerHTML = "It's Carlson's new mystery drink. An exclusivity only for <span>YOU</span>";
    btn.textContent = 'WHAT IS IT?';
    btn.setAttribute('data-toggle','');
    bottleHidden.src = "images/Hidden.jpg";
  }
}
