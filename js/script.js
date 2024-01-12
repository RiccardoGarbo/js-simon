//Trasferisco gli elementi della pagina

const button = document.getElementById('button')
const numbersPage = document.getElementById('numbers')
const timerPage = document.getElementById('timer')
const result = document.getElementById('result')

//Al click del bottone faccio apparire in pagina 

button.addEventListener('click', () => {
    button.classList.add('hidden')
    let numbers = []
    //Genero 5 numeri casuali da 1 a 100
    for (let i = 0; i < 5; i++) {
        const number = Math.floor(Math.random() * 100) + 1
        numbers.push(number)
    }
    //Stampo i numeri casuali in pagina
    numbersPage.innerText = numbers.join(' - ')
    //Facci partire il timer da 30
    let timer = 3
    //Stampo il timer in pagina
    timerPage.innerText = `TIMER: ${timer}`
    //Diminuisco ogni secondo in valore di timer
    const countDown = setInterval(function () {
        --timer
        timerPage.innerText = `TIMER: ${timer}`
        if (timer === 0) {
            clearInterval(countDown)
            numbersPage.classList.add('hidden')
            timerPage.classList.add('hidden')
            button.classList.remove('hidden')
            for (let i = 0; i < 5; i++) {
                const numberUser = parseInt(prompt('Inserisci i numeri visti in precedenza'))
            }
            button.innerText = 'Riprova'
        }
        else {
            numbersPage.classList.remove('hidden')
            timerPage.classList.remove('hidden')
            button.classList.remove('remove')
        }

    }, 1000)

}
)