"use strict";
function dr() {
	let objii = document.getElementById('nn');
	let svv = objii.contentDocument;

	let coo = svv.querySelectorAll('use');
	document.getElementById('di').scrollBy(-(document.getElementById('di').scrollLeft), 0);
	for (let copi = 0; copi < coo.length; copi++) {
		coo[copi].remove();
	}

	let pathOne = svv.getElementById("pathOne");
	pathOne.setAttribute('d', 'M' + arr[0][90] + ',' + arr[1][90] + 'A' + radius + "," + radius + ", 0, 0, 1, " + arr[0][0] + ',' + arr[1][0] + 'L' + x1 + ' ' + y1 + 'Z');
	let pathTwo = svv.getElementById("pathTwo");
	pathTwo.setAttribute('d', 'M' + arr2[0][91] + "," + arr2[1][91] + 'A' + radius + "," + radius + ", 0, 0, 0, " +
		arr2[0][1] + ',' + arr2[1][1] + 'L' + arr2[0][0] + ',' + arr2[1][0] + 'Z');
	let svgNS = "http://www.w3.org/2000/svg";
	let xlinkNS = "http://www.w3.org/1999/xlink";
	let count = (+(document.getElementById('secondval').value)) / 2;
	let ll = -(150 - (arr2[1][0]));
	let colvo = 0;
	let left = 0;
	let iai = 0;
	let inp = svv.getElementById('sv');
	let norepeat = false;
	for (; iai < count; iai++) {
		if ((150 - Math.abs(colvo * ll) < Math.abs(ll))) {
			if ((140 - Math.abs(colvo * ll) > radius)) {
				let use = document.createElementNS(svgNS, 'use');
				use.setAttributeNS(xlinkNS, 'xlink:href', '#pathOne');
				use.setAttribute('x', left * arr2[0][1]);
				use.setAttribute('y', colvo * ll);
				inp.appendChild(use);
				iai = iai + 0.5;
				norepeat = true;
			}
			colvo = 0;
			left++;
		}
		if (count - iai < 1) {
			break;
		}
		let use = document.createElementNS(svgNS, 'use');
		use.setAttributeNS(xlinkNS, 'xlink:href', '#copy');
		use.setAttribute('x', left * arr2[0][1]);
		use.setAttribute('y', colvo * ll);
		inp.appendChild(use);
		colvo++;
	}
	if (!(count - iai)) {
		norepeat = false;
	}
	if ((count - Math.floor(count)) && (Math.ceil(iai) === Math.floor(count))) {
		let use = document.createElementNS(svgNS, 'use');
		use.setAttributeNS(xlinkNS, 'xlink:href', '#pathOne');
		use.setAttribute('x', left * arr2[0][1]);
		use.setAttribute('y', colvo * ll);
		inp.appendChild(use);
	} else if ((Math.ceil(iai) === (count)) && norepeat) {
		let use = document.createElementNS(svgNS, 'use');
		use.setAttributeNS(xlinkNS, 'xlink:href', '#pathOne');
		use.setAttribute('x', left * arr2[0][1]);
		use.setAttribute('y', colvo * ll);
		inp.appendChild(use);
	}
	if(!(document.getElementById('firstval').value)) {
		wigb ();
	}
	else {
		drowMonth();
		drMonth();
	}
}

