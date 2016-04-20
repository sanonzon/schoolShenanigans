/*var calculator = (function Calculator() {
	// body...
	
	function add(x,y) {
		// body...
		return x+y;
	}
	function subtract(x,y) {
		// body...
		return x-y;
	}
	function multiply(x,y) {
		// body...
		return x*y;
	}

	function divide(x,y) {
		// body...
		return x/y;
	}

	return {
		add: add, subtract: subtract, divide:divide, multiply:multiply
	}

})();

var operand;
*/



document.querySelector('#numberOne').addEventListener('click', function() {

	alert("fghj");
	console.log(document.getDocumentById('#inputOne').classList.contains("active"));
	if !(document.getDocumentById('#inputOne').classList.contains("active")) {
			document.getDocumentById('#inputOne').classList.add("active");
			document.getDocumentById('#inputTwo').classList.remove("active");
	}
	
    
}, false);


document.querySelector('#inputTwo').addEventListener('click', function() {
    document.getDocumentById('#inputTwo').classList.add("active");
    document.getDocumentById('#inputOne').classList.remove("active");
}, false);





document.querySelector('#multiply').addEventListener('click', function() {
    alert('Hello world');
}, false);

document.querySelector('#multiply').addEventListener('click', function() {
    alert('Hello world');
}, false);

document.querySelector('#multiply').addEventListener('click', function() {
    alert('Hello world');
}, false);

document.querySelector('#multiply').addEventListener('click', function() {
    alert('Hello world');
}, false);








/*

console.log("13 + 2 =", calculator.add(13,2));
console.log("15 - 7 =", calculator.subtract(15,7));
console.log("42 * 3 =", calculator.multiply(42,3));
console.log("20 / 5 =", calculator.divide(20,5));

var elements = document.querySelectorAll("h1, h2, h3, p");
for (var i = 0; i < elements.length;i++) {
	elements[i].innerText = "You've BEEN HACKED!!!!!!!!oneoneoen"; }

	*/