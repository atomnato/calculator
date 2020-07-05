"use strict";
function drMonth() {
	let objii = document.getElementById('nn');
	let svv = objii.contentDocument;

	let pathOne = svv.getElementById("pathOneM");
	pathOne.setAttribute('d', 'M' + arr[0][180] + ',' + arr[1][180] + 'A' + radius + "," + radius + ", 0, 0, 1, " + arr[0][0] + ',' + arr[1][0] + 'L' + x1 + ' ' + y1 + 'Z');
	let pathTwo = svv.getElementById("pathTwoM");
	pathTwo.setAttribute('d', 'M' + arr2[0][181] + "," + arr2[1][181] + 'A' + radius + "," + radius + ", 0, 0, 0, " +
		arr2[0][1] + ',' + arr2[1][1] + 'L' + arr2[0][0] + ',' + arr2[1][0] + 'Z');
	let inp = svv.getElementById('sv');
	let chil = inp.lastChild;
	let widt = (chil.nodeName !== "use" )? 0: chil.getBoundingClientRect();
	let wwwd = (chil.nodeName !== "use")? 0: widt.right;
	let svgNS = "http://www.w3.org/2000/svg";
	let xlinkNS = "http://www.w3.org/1999/xlink";
	let count = (+(document.getElementById('firstval').value)) / 2;
	let ll = -(150 - (arr2[1][0])); //верни 300
	let interval = (radius > 82) ? (arr2[0][0] + (arr2[0][0] - arr[0][0]) - 5) : arr[0][0];
	let colvo = 0;
	let left = 0;
	let iai = 0;
	let norepeat = false;
	for (; iai < count; iai++) {
		if ((150 - Math.abs(colvo * ll) < Math.abs(ll))) {
			if ((140 - Math.abs(colvo * ll) > radius)) {
				let use = document.createElementNS(svgNS, 'use');
				use.setAttributeNS(xlinkNS, 'xlink:href', '#pathOneM');
				use.setAttribute('x', (left * interval) + wwwd);
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
		use.setAttributeNS(xlinkNS, 'xlink:href', '#copyM');
		use.setAttribute('x', (left * interval) + wwwd);
		use.setAttribute('y', colvo * ll);
		inp.appendChild(use);
		colvo++;
	}
	if (!(count - iai)) {
		norepeat = false;
	}
	if ((count - Math.floor(count)) && (Math.ceil(iai) === Math.floor(count))) {
		let use = document.createElementNS(svgNS, 'use');
		use.setAttributeNS(xlinkNS, 'xlink:href', '#pathOneM');
		use.setAttribute('x',(left * interval) + wwwd);
		use.setAttribute('y', colvo * ll);
		inp.appendChild(use);
	} else if ((Math.ceil(iai) === (count)) && norepeat) {
		let use = document.createElementNS(svgNS, 'use');
		use.setAttributeNS(xlinkNS, 'xlink:href', '#pathOneM');
		use.setAttribute('x', (left * interval) + wwwd);
		use.setAttribute('y', colvo * ll);
		inp.appendChild(use);
	}
	wigb();
}
