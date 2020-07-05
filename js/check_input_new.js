"use strict";
//проверка ввода
document.addEventListener('keydown',function check (e) { //делай
	if((/^[А-Яа-яA-Za-z-+]$/.test(e.key))) {
		e.preventDefault();
	}
} );


//добавление изделий
document.getElementById('increase').addEventListener('click', function (event)  {
	if (!event.target.matches('div')) return;
	if(event.target.matches('.plus')) {
		if(event.target.closest('.bc-container1')) {
			let inc = document.getElementById('firstval');
			inc.value++;
		}
		else {
			let inc = document.getElementById('secondval');
			inc.value++;
		}
	}
	else if (event.target.matches('.minus')){
		if(event.target.closest('.bc-container1')) {
			let inc = document.getElementById('firstval');
			if(inc.value <=0){
				return;
			}
			inc.value--;
		}
		else {
			let inc = document.getElementById('secondval');
			if(inc.value <=0){
				return;
			}
			inc.value--;
		}
	}
});
