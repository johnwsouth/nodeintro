console.log("Hello, world!")


function doMath(num1, operator, num2){
  var result;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator){
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
    case "X":
    case "x":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }
  return result;
}



console.log(process.argv)

var num1 = process.argv[2];
var operator = process.argv[3];
var num2 = process.argv[4];

var answer = doMath(num1, operator, num2);
console.log(answer);
