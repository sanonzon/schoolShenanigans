$(function() {
	var string = "";
	var result = "";
	$("button.justAdd").on("click", function() {
		$("#display").text($("#display").text() + $(this).text());
		string += $(this).text();
	});
	$("button.operand").on("click", function() {
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
			$("#display").text("ERROR");
		}
	});
});
