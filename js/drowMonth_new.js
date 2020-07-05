"use strict";

function drowMonth () {
	let TO_RADIANS = Math.PI / 180;
	const INDENT = (radius === 150) ? 0 : (radius >= 145) ? 1 : 6; //верни 300 и 295
	x1 = radius + 2;
	y1 = 150 - INDENT; //верни 300
	let angle = 0;
	let test = 0;

//первая четвертинка
	for (angle; angle >= -180; angle--) {
		arr[0][test] = (x1 + radius * Math.cos(angle * TO_RADIANS));
		arr[1][test] = (y1 + radius * Math.sin(angle * TO_RADIANS));
		test++;
	}
//вторая четвертинка
	let i = 1;
	let angle2 = 0;
	arr2[0][0] = radius+ 2; // к значению плюс 1
	arr2[1][0] = arr[1][90];

	for (angle2; angle2 <= 180; angle2++) {
		arr2[0][i] = (arr2[0][0] + radius * Math.cos(angle2 * TO_RADIANS));
		arr2[1][i] = (arr2[1][0] + radius * Math.sin(angle2 * TO_RADIANS));
		i++;
	}

	let RESULT = true;
	for (; ;) {
		let dio = 1;
		while (dio < arr2[0].length) {
			let x = x1 - arr2[0][dio];
			let y = y1 - arr2[1][dio];
			let length = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
			if ((length <= (radius + 6)) && (arr2[1][0] > INDENT)) {
				for (let j = 0; j < arr2[0].length; j++) {
					arr2[1][j]--;
				}
				RESULT = false;
				break;
			} else if (length <= (radius + 6)) {
				for (let j = 0; j < arr2[0].length; j++) {
					arr2[0][j]++;
				}
				RESULT = false;
				break;
			}
			RESULT = true;
			dio++;
		}
		if (RESULT) {
			break;
		}
	}
}