/*	document.querySelector('.plus').addEventListener('click',function(){
		var one = document.getElementById("inputOne").value;			
		var two = document.getElementById("inputTwo").value;

		if (/^[0-9]*$/.test(one) && /^[0-9]*$/.test(two)) {
			document.querySelector('.result').innerText = +one + +two;
		}
		else {
			document.querySelector('.result').innerText = "Bad numbers.";
		}


	});
	document.querySelector('.minus').addEventListener('click',function(){
		var one = document.getElementById("inputOne").value;			
		var two = document.getElementById("inputTwo").value;

		if (/^[0-9]*$/.test(one) && /^[0-9]*$/.test(two)) {
			document.querySelector('.result').innerText = +one - +two;
		}
		else {
			document.querySelector('.result').innerText = "Bad numbers.";
		}


	});
	document.querySelector('.multiply').addEventListener('click',function(){
		var one = document.getElementById("inputOne").value;			
		var two = document.getElementById("inputTwo").value;

		if (/^[0-9]*$/.test(one) && /^[0-9]*$/.test(two)) {
			document.querySelector('.result').innerText = +one * +two;
		}
		else {
			document.querySelector('.result').innerText = "Bad numbers.";
		}


	});
	document.querySelector('.divide').addEventListener('click',function(){
		var one = document.getElementById("inputOne").value;			
		var two = document.getElementById("inputTwo").value;

		if (/^[0-9]*$/.test(one) && /^[0-9]*$/.test(two)) {
			document.querySelector('.result').innerText = +one / +two;
		}
		else {
			document.querySelector('.result').innerText = "Bad numbers.";
		}


	});
*/
$(function() {
	$('.divide').on("click", function() {
		var one = document.getElementById("inputOne").value;			
		var two = document.getElementById("inputTwo").value;

		if (/^[0-9]*$/.test(one) && /^[0-9]*$/.test(two)) {
			document.querySelector('.result').innerText = +one / +two;
		}
		else {
			document.querySelector('.result').innerText = "Bad numbers.";
		}

	});




});
	