var value1 = document.getElementById('value1');
var value2 = document.getElementById('value2');
var value3 = document.getElementById('value3');
var value4 = document.getElementById('value4');
var value5 = document.getElementById('value5');
var value6 = document.getElementById('value6');
var value7 = document.getElementById('value7');
var value8 = document.getElementById('value8');
var value9 = document.getElementById('value9');
var value10 = document.getElementById('value10');
var value11 = document.getElementById('value11');
var add1 = document.getElementById('add1');
var add2 = document.getElementById('add2');
var add3 = document.getElementById('add3');
var add4 = document.getElementById('add4');
var add5 = document.getElementById('add5');
var add6 = document.getElementById('add6');
var add7 = document.getElementById('add7');
var add8 = document.getElementById('add8');
var add9 = document.getElementById('add9');
var add10 = document.getElementById('add10');
var add11 = document.getElementById('add11');
var sub1 = document.getElementById('sub1');
var sub2 = document.getElementById('sub2');
var sub3 = document.getElementById('sub3');
var sub4 = document.getElementById('sub4');
var sub5 = document.getElementById('sub5');
var sub6 = document.getElementById('sub6');
var sub7 = document.getElementById('sub7');
var sub8 = document.getElementById('sub8');
var sub9 = document.getElementById('sub9');
var sub10 = document.getElementById('sub10');
var sub11 = document.getElementById('sub11');
var mine = document.getElementById('mine');
var total = document.getElementById('total');

document.addEventListener("DOMContentLoaded",function(event){

add1.onclick = function(){
    Cookies.set('number', ~~Cookies.get('number') + ~~value1.value);
    console.log(parseInt(Cookies.get('number')));
	total.innerText = parseInt(Cookies.get('number'));
};
    var numbers = parseInt(Cookies.get('number'));

	if (Cookies.get('number')){
		total.innerText = numbers;
	}
sub1.onclick = function(){
    Cookies.set('number', ~~Cookies.get('number') - ~~value1.value);
    console.log(parseInt(Cookies.get('number')));
	total.innerText = parseInt(Cookies.get('number'));
};

	if (Cookies.get('number')){
		total.innerText = numbers;
	}
add2.onclick = function(){
    Cookies.set('number', ~~Cookies.get('number') + ~~value2.value);
    console.log(parseInt(Cookies.get('number')));
	total.innerText = parseInt(Cookies.get('number'));
};

	if (Cookies.get('number')){
		total.innerText = numbers;
	}
add3.onclick = function(){
    Cookies.set('number', ~~Cookies.get('number') + ~~value3.value);
    console.log(parseInt(Cookies.get('number')));
	total.innerText = parseInt(Cookies.get('number'));
};

	if (Cookies.get('number')){
		total.innerText = numbers;
	}
add4.onclick = function(){
    Cookies.set('number', ~~Cookies.get('number') + ~~value4.value);
    console.log(parseInt(Cookies.get('number')));
	total.innerText = parseInt(Cookies.get('number'));
};

	if (Cookies.get('number')){
		total.innerText = numbers;
	}
sub2.onclick = function(){
    Cookies.set('number', ~~Cookies.get('number') - ~~value2.value);
    console.log(parseInt(Cookies.get('number')));
	total.innerText = parseInt(Cookies.get('number'));
};

	if (Cookies.get('number')){
		total.innerText = numbers;
	}
sub3.onclick = function(){
    Cookies.set('number', ~~Cookies.get('number') - ~~value3.value);
    console.log(parseInt(Cookies.get('number')));
	total.innerText = parseInt(Cookies.get('number'));
};

	if (Cookies.get('number')){
		total.innerText = numbers;
	}
sub4.onclick = function(){
    Cookies.set('number', ~~Cookies.get('number') - ~~value4.value);
    console.log(parseInt(Cookies.get('number')));
	total.innerText = parseInt(Cookies.get('number'));
};

	if (Cookies.get('number')){
		total.innerText = numbers;
	}
});