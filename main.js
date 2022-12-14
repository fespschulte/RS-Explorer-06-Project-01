const btnTry = document.querySelector("#btnTry")
const btnAgain =  document.querySelector("#btnAgain")

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")


const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleResetClick)
// document.addEventListener('keydown', function (e) {
//   if(e.key == 'Enter') {
//     handleResetClick()
//   }
// })

// Funções
function handleTryClick (event) {
  event.preventDefault()
  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerHTML = `Acertou em ${xAttempts} tentativas!`
  }
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick () {
  toggleScreen()
  xAttempts = 1
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}