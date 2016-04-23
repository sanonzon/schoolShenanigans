/*
audio.pause() på standard selection bara för sången är så vacker.
Kan endast hantera tal -> operand -> tal -> =

*/


var audio = new Audio("popcorn.mp3");

function changeTheme(v) {
	switch (v) {
		case 1:
		$("#theme_selector").attr({
			rel: "stylesheet",
			type: "text/css",
			href: "style1.css"
		});
		audio.play();
		break;
		case 2:
		$("#theme_selector").attr({
			rel: "stylesheet",
			type: "text/css",
			href: "style3.css"
		});
		break;
		case 3:
		$("#theme_selector").attr({
			rel: "stylesheet",
			type: "text/css",
			href: "style2.css"
		});

		break;
		case 4:
		$("#theme_selector").attr({
			rel: "stylesheet",
			type: "text/css",
			href: "style4.css"
		});
		break;
		default:
		$("#theme_selector").attr({
			rel: "stylesheet",
			type: "text/css",
			href: "style.css"
		});
		audio.pause();
		audio.currentTime = 0;
		break;
	}
}



$(function() {

	var result = null;
	var test = true;
	var x = null;
	var y = null;
	var operand = null;
	var error = "";

	$("button.number").on("click", function() {
		$("#display").text($("#display").text() + $(this).text());
	});

	$("button.dot").on("click", function() {
		$("#display").text($("#display").text() + $(this).text());
	});

	$("button.mult").on("click", function() {
		if (operand == null) {
			x = $("#display").text();
		}
		$("#display").text("");
		operand = $(this).text();
	});

	$("button.divide").on("click", function() {
		if (operand == null) {
			x = $("#display").text();
		}
		$("#display").text("");
		operand = $(this).text();
	});

	$("button.plus").on("click", function() {
		if (operand == null) {
			x = $("#display").text();
		}
		$("#display").text("");
		operand = $(this).text();
	});

	$("button.minus").on("click", function() {
		if (operand == null) {
			x = $("#display").text();
		}
		$("#display").text("");
		operand = $(this).text();
	});

	$("button.reset").on("click", function() {
		$("#display").text("");
		result = null;
		test = true;
		x = null;
		y = null;
		operand = null;
		error = "";
		$("#errorX").text("");
		$("#errorY").text("");
		/*	$("#errorHandler").text("");
		$("#errorX").text("");
		$("#errorY").text("");
		$("#withEval").text("");
		*/
	});

	$("button.equals").on("click", function() {

		if ($("#display").text().length > 0) {
			y = $("#display").text();
		}
		console.log("x = " + x);
		console.log("y = " + y);
		if ((x == null || x.length == 0) || (y == null || y.length == 0)) {
			error = "ERROR";
			test = false;
		}


		/*
		Kollar om talen är korrekt inmatade heltal eller decimaltal.
		Regex är amazing.
		*/
		console.log("pre-number check: " + test);
		if (test) {
			if (!(/^[0-9]*$/.test(x) || /^[0-9]*\.[0-9]*$/.test(x))) {
				error = "ERROR";
				test = false;
			}
			if (!(/^[0-9]*$/.test(y) || /^[0-9]*\.[0-9]*$/.test(y))) {
				test = false;
				if (error.length == 0) {
					error = "ERROR";
				}
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

			var loggen = "" + x.toString() + " " + operand.toString() + " " + y.toString() + " = " + result.toString();
			console.log(loggen);
		}

		else {
			$("#errorHandler").text(error);
			if (x != null && y != null) {
				$("#errorX").text("Tal 1: " + x);
				$("#errorY").text("Tal 2: " + y);
			}

			$("#display").text(error);

		}

	});
});
