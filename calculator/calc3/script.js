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
		error = "";
		$("#errorHandler").text("");
		$("#errorX").text("");
		$("#errorY").text("");


	});

	$("button.equals").on("click", function() {
		var result = 0;
		var error = "";
		y = $("#display").text();
		
		var test = true;
		if (!(/^[0-9]*$/.test(x) || /^[0-9]*\.[0-9]*$/.test(x))) {
			error = "Första talet är dåligt. ";
			test = false;
		}
		if (!(/^[0-9]*$/.test(y) || /^[0-9]*\.[0-9]*$/.test(y))) {
			test = false;
			if (error.length > 0) {
				error += "& Andra talet också."	
			}
			else {
				error = "Andra talet är dåligt."
			}
			
		}

		if (test == true) {
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


		$("#display").text(result);	
		}
		else {
			$("#errorHandler").text(error);
			$("#errorX").text("Tal 1: " + x);
			$("#errorY").text("Tal 2: " + y);

		}


		



	});

});