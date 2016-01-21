$(document).ready(function() {

	var num1 = [];
	var num2 = [];
	var operand = null;
	var func = null;
	var res = null;

	var add = function(a, b) {
		return a+b;
	};

	var subtract = function(a, b) {
		return a-b;
	};

	var multiply = function(a, b) {
		return a*b;
	};

	var divide = function(a, b) {
		return a/b;
	};

	var invert = function(a) {
		return -a;
	};

	var percentage = function(a) {
		return (a/100).toFixed(2);
	};

	$("input").on("keypress", function(e) {
		e.preventDefault();
	})

	$(".num").on("click", function() {
		var num = $(this).text()
		if (!operand && num1.length < 5) {
			$("#screen").val($("#screen").val() + num).css("color", "black");		
			num1.push(num);
		} else if (func && num2.length <5) {
			if (!num2.length) {
				$("#screen").val("");
			}
			$("#screen").val($("#screen").val() + num).css("color", "black");		
			num2.push(num);
		}
	});

	$(".sym").on("click", function() {
		if (!operand) {
			operand = $(this).text();
			switch(operand) {
				case 'x':
					func = multiply;
					break;
				case '/':
					func = divide;
					break;
				case '+':
					func = add;
					break;
				case '-':
					func = subtract;
					break;
				case '+/-':
					num1 = num1.join("")*1;
					res = invert(num1);
					$("#screen").val(res);
					num1 = res.toString().split('');
					num2 = [];
					operand = null;
					func = null;
					res = null;
					break;
				case '%':
					num1 = num1.join("")*1;
					res = percentage(num1);
					$("#screen").val(res);
					num1 = res.toString().split('');
					num2 = [];
					operand = null;
					func = null;
					res = null;
					break;
			}		
		}
	});

	$("#equals").on("click", function() {
		if (func) {
			num1 = num1.join("")*1;
			num2 = num2.join("")*1;
			res = func(num1, num2);
			$("#screen").val(res);
			num1 = res.toString().split('');
			num2 = [];
			operand = null;
			func = null;
			res = null;
		}
	});

	$("#clear").on("click", function() {
		$("#screen").val("");
		num1 = [];
		num2 = [];
		operand = null;
		func = null;
		res = null;
	});
	
});

