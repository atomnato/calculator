"use strict";

let radius  = 0;
let check = document.getElementById('select').querySelectorAll('input');

	document.getElementById('but').addEventListener('click', function () {
		document.getElementById('left').style.visibility = 'hidden';
		document.getElementById('right').style.visibility = 'visible';
		const DENOMINATOR =3;
		if (check[1].checked) {
			let data = document.getElementById('data').querySelectorAll('input');
			let one = ((+(data[1].value)+7)/ DENOMINATOR).toFixed(4);
			radius = Math.ceil( (+one) +(+(data[2].value)));
		}
		else {
			let data = document.getElementById('data').querySelectorAll('input');
			let one = (+(data[0].value)/ DENOMINATOR).toFixed(4);
			radius =  Math.ceil( (+one)+(+(data[2].value)));
		}
		drow();
		dr();

		document.getElementById('tt').innerHTML  =((+document.getElementById('nn').offsetWidth)/100);
	} );


