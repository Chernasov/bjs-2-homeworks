
function solveEquation(a, b, c) {
	"use strict";
  let arr;
  // код для задачи №1 писать здесь
  let D = b**2 - 4 * a * c;
  if (D < 0) {
	  arr = new Array(0);
  } else if (D === 0) {
	  let x = -b/(2 * a);
	  arr = [x];
  } else {
	  let x1 = (-b + Math.sqrt(D) )/(2 * a);
	  let x2 = (-b - Math.sqrt(D) )/(2 * a);
	  arr = [x1, x2];
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
	"use strict";
  let totalAmount;
	let perc = Number(percent);
	if (Number.isNaN(perc)) {
		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	}
	let initial = Number(contribution);
	if (Number.isNaN(initial)) {
		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	}
	let loan = Number(amount);
	if (Number.isNaN(loan)) {
		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	}
	
	let S = loan - initial;
	let n = Math.trunc((date - Date.now())/(30*24*60*60*1000));
	let P = perc / 12 / 100;
	let everyMonth = S * (P + (P / (((1 + P) ** n) - 1)));
	totalAmount = Number((everyMonth * n).toFixed(2));
	console.log(totalAmount);

  // код для задачи №2 писать здесь

  return totalAmount;
}
