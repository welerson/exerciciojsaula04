// Inserir os dois números 

let numberOne = prompt('Insira o primeiro número')
let numberTwo = prompt('Insira o segundo número')

//cálculos 

let sum = (Number(numberOne) + Number(numberTwo))
let subtract = (Number(numberOne) - Number(numberTwo))
let multiplication = (Number(numberOne) * Number(numberTwo))
let division = (Number(numberOne) / Number(numberTwo))
let rest = (Number(numberOne) % Number(numberTwo))

// resultados na tela 
alert(`O resultado da soma é: ${sum}`)
alert(`O resultado da subtração é: ${subtract}`)
alert(`O resultado da multiplicação é: ${multiplication}`)
alert(`O resultado da divisão é: ${division.toFixed(2)}`)
alert(`O resto da operação é: ${rest}`)

// se a soma dos numeros são par ou ímpar 

if(rest == 0) {
  alert('A soma é PAR')

} else {
  alert('A soma é impar')
}

if(numberOne == numberTwo) {
  alert('Os números digitados são iguais ')
} else {
  alert('Os números digitados não são iguais')
}