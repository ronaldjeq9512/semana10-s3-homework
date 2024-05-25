// Escribe un bucle while que imprima los números del 1 al 5.
let n = 1
while (n < 6) {
    console.log(`Número ${n}`)
    n++;
}

// Escribe un bucle for que imprima los elementos de un array de nombres.
const arrayNanmes = ['ron', 'alex', 'luis']

for (let index = 0; index < arrayNanmes.length; index++) {
    console.log(arrayNanmes[index])  
}

// Usa forEach para imprimir los elementos de un array de números multiplicados por 2
const arrayNumbers = [1,2,3,4,5,6]

arrayNumbers.forEach(element => {
    console.log(element*2)
});

// Usa map para crear un nuevo array con los cuadrados de los números de un array dado.

const arrayNumbers2 = [2,3,4,5,6]
const arrayNumbers2ToPow = arrayNumbers2.map(number => Math.pow(number, 2))

//Usa find para encontrar el primer número mayor que 10 en un array de números
const arrayNumbers3 = [5,10,9,7,21, 11]
const foundNumberToMajor10 = arrayNumbers3.find((number) => number > 10);

//Usa some para verificar si hay algún número par en un array de números.
const arrayNumbers4 = [5,10,9,7,21, 11]
const existEvenNumber = arrayNumbers4.some(number => number % 2 === 0);

// Usa filter para crear un nuevo array con los números impares de un array dado.
const arrayOddNumbers = arrayNumbers4.filter(number => number % 2 !== 0);

// Combina filter y map para crear un nuevo array con los cuadrados de los números impares de un array dado
const arrayNumbersOddToPow = arrayNumbers4.filter(number => number % 2 !== 0).map(number => Math.pow(number, 2))