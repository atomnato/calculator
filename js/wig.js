"use strict";

function wigb (){
	let objii = document.getElementById('nn');
	let svv = objii.contentDocument;
	let inp = svv.getElementById('sv');
	let chil = inp.lastChild;
	let widt = (chil.nodeName !== "use")? 0: chil.getBoundingClientRect();
	let wwwd = (chil.nodeName !== "use" )? 0: widt.right;
	inp.setAttribute('width', (wwwd + 2));

	let wig = inp.scrollWidth;
	if (wig<1170) {
		let one = document.getElementById('left');
		one.style.display = "none";
		let two = document.getElementById('right');
		two.style.display = "none";
	}
	else {
		let one = document.getElementById('left');
		one.style.display = "block";
		let two = document.getElementById('right');
		two.style.display = "block";
	}


	let conteiner = document.getElementById("conteiner");
	conteiner.style.visibility = "visible";
}


let cont =false;
let idd = document.getElementById('di');
let ids = document.getElementById('nn');
//вперед
function chet (){

	if(cont) {
		if (idd.scrollLeft > 0) {
			document.getElementById('left').style.visibility = 'visible';
		}
		else {
			document.getElementById('left').style.visibility = 'hidden';
		}
		if ((900+idd.scrollLeft) === ids.offsetWidth) {
			document.getElementById('right').style.visibility = 'hidden';
		}
		else {
			document.getElementById('right').style.visibility = 'visible';
		}
		idd.scrollBy(3,0);
		setTimeout(chet, 0);
	}
}
document.getElementById('right').onmousedown = function (e) {
	if(e.which === 1){


		cont = true;
		chet();
	}
};
document.getElementById('right').onmouseout = function () {
	cont= false;
	chet();
};
document.getElementById('right').onmouseup = function () {
	cont= false;
	chet();
};
// кнопка назад
function chettwo (){
	if(cont) {
		if (idd.scrollLeft > 0) {
			document.getElementById('left').style.visibility = 'visible';
		}
		else {
			document.getElementById('left').style.visibility = 'hidden';
		}
		if ((900+idd.scrollLeft) === ids.offsetWidth) {
			document.getElementById('right').style.visibility = 'hidden';
		}
		else {
			document.getElementById('right').style.visibility = 'visible';
		}
		idd.scrollBy(-3,0);
		setTimeout(chettwo, 0);
	}
}
document.getElementById('left').onmousedown = function (e) {
	if(e.which === 1) {

		cont = true;
		chettwo();
	}
};
document.getElementById('left').onmouseout = function () {
	cont= false;
	chettwo();
};
document.getElementById('left').onmouseup = function () {
	cont= false;
	chettwo();
};