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
var mine = document.getElementById('mine');
var total = document.getElementById('total');
var incart1 = document.getElementById('incart1');
var incart2 = document.getElementById('incart2');
var incart3 = document.getElementById('incart3');
var incart4 = document.getElementById('incart4');

document.addEventListener("DOMContentLoaded",function(event){

	if (Cookies.get('numbers1'),Cookies.get('numbers2'),Cookies.get('numbers3'),Cookies.get('numbers4')){
		total.innerText =  parseInt(Cookies.get('numbers1')) + parseInt(Cookies.get('numbers2')) + parseInt(Cookies.get('numbers3')) + parseInt(Cookies.get('numbers4'))
		incart1.innerText = " Currently in cart:" + parseInt(Cookies.get('numbers1'))
		incart2.innerText = " Currently in cart:" + parseInt(Cookies.get('numbers2'))
		incart3.innerText = " Currently in cart:" + parseInt(Cookies.get('numbers3'))
		incart4.innerText = " Currently in cart:" + parseInt(Cookies.get('numbers4'))
	}

add1.onclick = function(){
    Cookies.set('numbers1', ~~Cookies.get('numbers1') + ~~value1.value);
    console.log(parseInt(Cookies.get('numbers1')));
    total.innerText = parseInt(Cookies.get('numbers1')) + parseInt(Cookies.get('numbers2')) + parseInt(Cookies.get('numbers3')) + parseInt(Cookies.get('numbers4'));
    incart1.innerText = " Currently in cart:" + parseInt(Cookies.get('numbers1'));
};

sub1.onclick = function(){
    Cookies.set('numbers1', ~~Cookies.get('numbers1') - ~~value1.value);
    console.log(parseInt(Cookies.get('numbers1')));
	total.innerText = parseInt(Cookies.get('numbers1')) + parseInt(Cookies.get('numbers2')) + parseInt(Cookies.get('numbers3')) + parseInt(Cookies.get('numbers4'));
	incart1.innerText = " Currently in cart:" + parseInt(Cookies.get('numbers1'));
};

add2.onclick = function(){
    Cookies.set('numbers2', ~~Cookies.get('numbers2') + ~~value2.value);
    console.log(parseInt(Cookies.get('numbers2')));
	total.innerText = parseInt(Cookies.get('numbers1')) + parseInt(Cookies.get('numbers2')) + parseInt(Cookies.get('numbers3')) + parseInt(Cookies.get('numbers4'));
    incart2.innerText = " Currently in cart:" + parseInt(Cookies.get('numbers2'));
};

sub2.onclick = function(){
    Cookies.set('numbers2', ~~Cookies.get('numbers2') - ~~value2.value);
    console.log(parseInt(Cookies.get('numbers2')));
	total.innerText = parseInt(Cookies.get('numbers1')) + parseInt(Cookies.get('numbers2')) + parseInt(Cookies.get('numbers3')) + parseInt(Cookies.get('numbers4'));
    incart2.innerText = " Currently in cart:" + parseInt(Cookies.get('numbers2'));
};

add3.onclick = function(){
    Cookies.set('numbers3', ~~Cookies.get('numbers3') + ~~value3.value);
    console.log(parseInt(Cookies.get('numbers3')));
	total.innerText = parseInt(Cookies.get('numbers1')) + parseInt(Cookies.get('numbers2')) + parseInt(Cookies.get('numbers3')) + parseInt(Cookies.get('numbers4'));
    incart3.innerText = " Currently in cart:" + parseInt(Cookies.get('numbers3'));
};

sub3.onclick = function(){
    Cookies.set('numbers3', ~~Cookies.get('numbers3') - ~~value3.value);
    console.log(parseInt(Cookies.get('numbers3')));
	total.innerText = parseInt(Cookies.get('numbers1')) + parseInt(Cookies.get('numbers2')) + parseInt(Cookies.get('numbers3')) + parseInt(Cookies.get('numbers4'));
    incart3.innerText = " Currently in cart:" + parseInt(Cookies.get('numbers3'));
};

add4.onclick = function(){
    Cookies.set('numbers4', ~~Cookies.get('numbers4') + ~~value4.value);
    console.log(parseInt(Cookies.get('numbers4')));
	total.innerText = parseInt(Cookies.get('numbers1')) + parseInt(Cookies.get('numbers2')) + parseInt(Cookies.get('numbers3')) + parseInt(Cookies.get('numbers4'));
    incart4.innerText = " Currently in cart:" + parseInt(Cookies.get('numbers4'));
};

sub4.onclick = function(){
    Cookies.set('numbers4', ~~Cookies.get('numbers4') - ~~value4.value);
    console.log(parseInt(Cookies.get('numbers4')));
	total.innerText = parseInt(Cookies.get('numbers1')) + parseInt(Cookies.get('numbers2')) + parseInt(Cookies.get('numbers3')) + parseInt(Cookies.get('numbers4'));
    incart4.innerText = " Currently in cart:" + parseInt(Cookies.get('numbers4'));
};

$(document).ready(function(){
	$("#add1").click();
	});
$(document).ready(function(){
	$("#add2").click();
	});
$(document).ready(function(){
	$("#add3").click();
	});
$(document).ready(function(){
	$("#add4").click();
	});

});