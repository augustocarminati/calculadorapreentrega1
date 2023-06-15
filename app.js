const SUMAR = 1;
const RESTAR = 2;
const DIVIDIR = 3;
const MULTIPLICAR = 4;

let num1;
let num2;
let resultado = 0;
let opcion;
let continuar;

function suma(numero1, numero2){
	return numero1 + numero2;
}

function resta(numero1, numero2){
	return numero1 - numero2;
}

function multiplicacion(numero1, numero2){
	return numero1 * numero2;
}

function division(numero1, numero2){
	return numero1 / numero2;
}

while (continuar !== 'no') {
        alert('Bienvenido a nuestra calculadora')
        num1 = parseFloat(prompt('Ingrese el primer numero'));
        num2 = parseFloat(prompt('Ingrese el segundo numero'));
        opcion = parseInt(prompt(`ingrese la operacion que desea realizar \n
                    1- sumar \n 
                    2- restar \n
                    3- dividir \n
                    4- multiplicar`));

        switch (opcion) {

                case SUMAR:
                        resultado = suma(num1, num2);
                        break;
                case RESTAR:
                        resultado = resta(num1, num2);
                        break;
                case DIVIDIR:
                        resultado = division(num1, num2);
                        break;
                case MULTIPLICAR:
                        resultado = multiplicacion(num1,num2);
                        break;
                default:
                        resultado = 0;
        }

        alert('El resultado es: ' + resultado);
        continuar = prompt('desea realizar otra operacion?: si | no');
}
