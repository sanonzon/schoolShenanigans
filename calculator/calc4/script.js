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
