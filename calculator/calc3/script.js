$(function() {
	var audio = new Audio('popcorn.mp3');

	var x;
	var y;
	var operand = "";
	$("button").on("click", function() {
		audio.play();
	});

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
		$("#withEval").text("");
	});

	$("button.equals").on("click", function() {
		var result = 0;
		var error = "";
		var test = true;

		y = $("#display").text();
		/*
		Kollar om talen är korrekt inmatade heltal eller decimaltal.
		Regex är amazing.
		*/
		if (!(/^[0-9]*$/.test(x) || /^[0-9]*\.[0-9]*$/.test(x))) {
			error = "Första talet är dåligt. ";
			test = false;
		}
		if (!(/^[0-9]*$/.test(y) || /^[0-9]*\.[0-9]*$/.test(y))) {
			test = false;
			if (error.length > 0) {
				error = "Båda talen är dåliga.";
			}
			else {
				error = "Andra talet är dåligt.";
			}

		}
		/*
		Proper input ? do math.
		*/
		if (test) {
			x = parseFloat(x,10);
			y = parseFloat(y,10);

			switch(operand) {
				case '+':
				result = x + y;
				break;
				case '-':
				result = x - y;
				console.log(result)
				break;
				case '*':
				result = x * y;
				break;
				case '/':
				result = x / y;
				break;
				default:
				result = 0;
				break;
			}

			var decimalCount = 0;
			var tempResult = result.toFixed(10);
			console.log("pre-if: " + tempResult);
			if (tempResult % 1 != 0) {
				console.log("if: " + tempResult);
				while (decimalCount < 10) {
					console.log("while: " + tempResult);
					decimalCount++;
					tempResult*=10;
					if ((tempResult % 1).toFixed(10) == 0) {
						break;
					}
				}
			}

			result = result.toFixed(decimalCount);

			$("#display").text(result);
			evalString = "" + x + operand + y;
			$("#withEval").text("With eval: " + eval(evalString));
		}

		else {


			$("#errorHandler").text(error);
			$("#errorX").text("Tal 1: " + x);
			$("#errorY").text("Tal 2: " + y);

		}






	});

});
