let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt(prompt("Ingrese el segundo numero"));
let operacion = prompt("Ingrese la operacion a realizar: + , - , * , / ")
let mensaje;

if (operacion === "/" && numero2 === 0) {
  alert("El segundo numero es igual a 0, no se puede dividir por cero");
} else if (operacion !== "+" && operacion !== "-" && operacion !== "*" && operacion !== "/") {
  alert("Ingrese un operacion valida, recuerde que solo puede sumar, restar, multiplicar o dividir");
} else {
  switch (operacion) {
    case "+":
      mensaje = numero1 + numero2;
      break;
    case "-":
      mensaje = numero1 - numero2;
      break;
    case "*":
      mensaje = numero1 * numero2;
      break;
    case "/":
      mensaje = numero1 / numero2;
      break;
  }

  alert("El resultado de su operacion es" + " " + mensaje);
}
