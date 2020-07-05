"use strict";
let arr = [[], []];
let arr2 = [[], []];

let x1 = 0;
let y1 = 0;
function drow() {
	let TO_RADIANS = Math.PI / 180;

	const MAX_RADIAUS = 150;
	const INDENT_Y = (radius === MAX_RADIAUS) ? 0 : (radius >= (MAX_RADIAUS - 5)) ? 1 : 6;
	const INDENT_X = 2;
	const MAX_ANGLE = 90;

	x1 = INDENT_X;
	y1 = 150 - INDENT_Y; // 150 это высота ткани
	let angle = 0;
	let first_index = 0;
	let result = true;

//первая четвертинка
	for (angle; angle >= -(MAX_ANGLE); angle--) {
		arr[0][first_index] = (x1 + radius * Math.cos(angle * TO_RADIANS));
		arr[1][first_index] = (y1 + radius * Math.sin(angle * TO_RADIANS));
		first_index++;
	}

//вторая четвертинка
	arr2[0][0] = radius + INDENT_X;
	arr2[1][0] = arr[1][90];
	let angle2 = MAX_ANGLE;
	let i = 1;

	for (angle2; angle2 <= (2 * MAX_ANGLE); angle2++) {
		arr2[0][i] = (arr2[0][0] + radius * Math.cos(angle2 * TO_RADIANS));
		arr2[1][i] = (arr2[1][0] + radius * Math.sin(angle2 * TO_RADIANS));
		i++;
	}


	for (; ;) {
		let length_arr = 1;
		while (length_arr < arr2[0].length) {
			let x2 = x1 - arr2[0][length_arr];
			let y2 = y1 - arr2[1][length_arr];
			let length_radius = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
			if ((length_radius <= (radius + INDENT_X)) && (arr2[1][0] > INDENT_Y)) {
				for (let j = 0; j < arr2[0].length; j++) {
					arr2[1][j]--;
				}
				result = false;
				break;
			} else if (length_radius <= (radius + INDENT_X)) {
				for (let j = 0; j < arr2[0].length; j++) {
					arr2[0][j]++;
				}
				result = false;
				break;
			}
			result = true;
			length_arr++;
		}
		if (result) {
			break;
		}
	}
}