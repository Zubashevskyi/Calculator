const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const signs = document.querySelector('#signs')
let action = '+'
const button = document.querySelector('#button')
const result = document.querySelector('#result')



function calculateResult(number1, number2, actionSymbol) {
  const num1 = Number(number1.value)
  const num2 = Number(number2.value)
  switch (actionSymbol) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    case '/':
      return num1 / num2

  }
}

signs.addEventListener('click', (e) => {
  action = e.target.textContent
})

button.addEventListener('click', () => {
  result.textContent = calculateResult(input1, input2, action)
  if (result.textContent > -1) {
    result.style.color = 'green'
  } else {
    result.style.color = 'red'
  }
  console.log(result.textContent)
})