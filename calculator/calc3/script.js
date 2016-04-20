$(function() {
	var x;
	var y;
	var operand = "";

	$("button.number").on("click", function() {
		$("#display").text($("#display").text()+$(this).text());
	});

	$("button.dot").on("click", function() {
		$("#display").text($("#display").text()+$(this).text());
	});


	$("button.mult").on("click", function() {
		x = $("#display").text();
		$("#display").text("");		
		operand = $(this).text();

	});

	$("button.divide").on("click", function() {
		x = $("#display").text();
		$("#display").text("");		
		operand = $(this).text();
	});

	$("button.plus").on("click", function() {
		x = $("#display").text();
		$("#display").text("");		
		operand = $(this).text();
	});

	$("button.minus").on("click", function() {
		x = $("#display").text();
		$("#display").text("");		
		operand = $(this).text();
	});
	$("button.reset").on("click", function() {
		$("#display").text("");
		x = 0;
		y = 0;		
		result = 0;
		
	});

	$("button.equals").on("click", function() {
		var result = 0;
		y = $("#display").text();
		console.log(/^[0-9]*$/.test(y));

		if ((/^[0-9]*$/.test(x) || /^[0-9]*\.[0-9]*$/.test(x)) &&  (/^[0-9]*$/.test(y) || /^[0-9]*\.[0-9]*$/.test(y))){			
			switch(operand) {
				case '+':
				result = +x + +y;
				break;
				case '-':
				result = +x - +y;
				break;
				case '*':
				result = +x * +y;
				break;
				case '/':
				result = +x / +y;
				break;
				default:
				result = 0;
				break;
			}



		}
		
		
		$("#display").text(result);	



	});

});