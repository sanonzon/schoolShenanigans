/*
audio.pause() på standard selection bara för låten är så vacker.
Kan endast hantera tal -> operand -> tal -> =
*/


var popcorn = new Audio("popcorn.mp3");


function changeTheme(v) {
	switch (v) {
		case 1:
		$("#theme_selector").attr({
			rel: "stylesheet",
			type: "text/css",
			href: "style1.css"
		});
		popcorn.play();
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
		case 5:
		$("#theme_selector").attr({
			rel: "stylesheet",
			type: "text/css",
			href: "style5.css"
		});
		break;
		default:
		$("#theme_selector").attr({
			rel: "stylesheet",
			type: "text/css",
			href: "style.css"
		});
		popcorn.pause();
		popcorn.currentTime = 0;
		break;
	}
}

function scientificNotation(number) {
	var withoutE = /^[0-9]*/.exec(number);
	var eCounter = /[0-9]*$/.exec(number);
	if (/[0-9]*e\+[0-9]*/.test(number)) {
		for (var i = 0; i < eCounter; i++) {
			withoutE *= 10;
		}
	}
	else if (/[0-9]*e\-[0-9]*/.test(number)) {
		for (var i = 0; i < eCounter; i++) {
			withoutE /= 10;
		}
	}
	else {
		return number;
	}
	return withoutE;
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
		result = null;
		test = true;
		x = null;
		y = null;
		operand = null;
		error = "";

		$("#display").text("");
		$("#errorX").text("");
		$("#errorY").text("");

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
			/*
			Fulhack ifall talet har e notation
			*/
			if (/e/.test(x) || /e/.test(y)) {
				x = scientificNotation(x);
				y = scientificNotation(y);
				test = true;
				error = "";
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

			if (x != null && y != null) {
				$("#errorX").text("Tal 1: " + x);
				$("#errorY").text("Tal 2: " + y);
			}

			$("#display").text(error);

		}

	});
});
