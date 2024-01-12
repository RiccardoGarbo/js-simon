//Trasferisco gli elementi della pagina

const button = document.getElementById('button')
const numbersPage = document.getElementById('numbers')
const timerPage = document.getElementById('timer')
const result = document.getElementById('result')

//Al click del bottone faccio apparire in pagina 

button.addEventListener('click', () => {
    let numbers = []
    //Genero 5 numeri casuali da 1 a 100
    for (let i = 0; i < 5; i++) {
        const number = Math.floor(Math.random() * 100) + 1
        numbers.push(number)
    }
    //Stampo i numeri casuali in pagina
    numbersPage.innerText = numbers.join(' - ')
    //Facci partire il timer da 30
    let timer = 5
    //Stampo il timer in pagina
    timerPage.innerText = `TIMER: ${timer}`
    //Diminuisco ogni secondo in valore di timer
    const countDown = setInterval(function () {
        --timer
        timerPage.innerText = `TIMER: ${timer}`

    }, 1000)

}
)