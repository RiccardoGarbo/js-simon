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
        const number = parseInt(Math.floor(Math.random() * 100) + 1)
        numbers.push(number)
    }
    //Stampo i numeri casuali in pagina
    numbersPage.innerText = numbers.join(' - ')
    //Facci partire il timer da 30
    let timer = 30
    //Stampo il timer in pagina
    timerPage.innerText = `TIMER: ${timer}`
    //Diminuisco ogni secondo in valore di timer
    const countDown = setInterval(function () {
        --timer
        timerPage.innerText = `TIMER: ${timer}`
        if (timer === 0) {
            //Interrompo l'intervallo
            clearInterval(countDown)
            //Aggiungo e rimuovo eventuali classi
            numbersPage.classList.add('hidden')
            timerPage.classList.add('hidden')
            button.classList.remove('hidden')
            //Chiado all'utente tanti numeri quanti i numeri randomici 
            let numberUser = []
            for (let i = 0; i < numbers.length; i++) {
                numberUser.push(parseInt(prompt('Inserisci i numeri visti in precedenza')))
                console.log(numberUser)
                console.log(numbers)
                //Se il numero dell'utente è uguale al numero randomico generato in pagina allora lo inserisco nel risultato.
                if (numberUser[i] === numbers[i]) {
                    //Creo il messaggio finale con numeri indovinati e punteggio
                    result.innerText = `Hai indovinato questi numeri:${numberUser} per un totale di ${numberUser.length} punti! `
                }
            }
            button.innerText = 'Riprova'
        }
        else {
            //Rimuobo eventuali classi
            numbersPage.classList.remove('hidden')
            timerPage.classList.remove('hidden')
            button.classList.remove('remove')
        }

    }, 1000)

}
)