function changeTheme(v) {
		switch (v) {
			case 1:
			$("#theme_selector").attr({
				rel: "stylesheet",
				type: "text/css",
				href: "style1.css"
			});
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
			break;
		}
	}

$(function() {
	var string = "";
	var result = "";
	$("button.number").on("click", function() {
		$("#display").text($("#display").text() + $(this).text());
		string += $(this).text();
	});

	$("button.dot").on("click", function() {
		$("#display").text($("#display").text() + $(this).text());
		string += $(this).text();
	});

	$("button.mult").on("click", function() {
		$("#display").text("");
		string += $(this).text();
	});

	$("button.divide").on("click", function() {
		$("#display").text("");
		string += $(this).text();
	});

	$("button.plus").on("click", function() {
		$("#display").text("");
		string += $(this).text();
	});

	$("button.minus").on("click", function() {
		$("#display").text("");
		string += $(this).text();
	});

	$("button.reset").on("click", function() {
		$("#display").text("");
		string = "";
		result = "";
	});

	$("button.equals").on("click", function() {
		try {
			result = eval(string);
			$("#display").text(result);
		}
		catch (err) {
			$("#display").text("Det gick inte.");
		}
	});
});
