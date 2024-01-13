//Trasferisco gli elementi della pagina

const button = document.getElementById('button')
const numbersPage = document.getElementById('numbers')
const timerPage = document.getElementById('timer')
const result = document.getElementById('result')

//Al click del bottone faccio apparire in pagina 

button.addEventListener('click', () => {
    button.classList.add('hidden')
    result.innerText = ' '
    let numbers = []

    //Genero 5 numeri diversi casuali da 1 a 100
    while (numbers.length < 5) {
        let number = parseInt(Math.floor(Math.random() * 100) + 1)
        if (!numbers.includes(number))
            numbers.push(number)
        console.log(numbers)
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
            //Interrompo l'intervallo
            clearInterval(countDown)
            //Aggiungo e rimuovo eventuali classi
            numbersPage.classList.add('hidden')
            button.classList.remove('hidden')
            timerPage.classList.add('hidden')

            //Creo una variabile per i numeri corretti dell'utente
            let correctNumberUser = []
            //Chiedo per 5 volte i numeri all'utente
            for (let i = 0; i < numbers.length; i++) {
                let userNumber = (parseInt(prompt('Inserisci i numeri visti in precedenza')))
                //Se tra i numeri random usciti in pagina è presente il numero inserito nell utente, allora lo aggiungo alla variabile dei numeri corretti
                if (numbers.includes(userNumber)) {
                    correctNumberUser.push(userNumber)
                    //Creo il messaggio finale con numeri indovinati e punteggio
                    result.innerText = `Hai indovinato questi numeri:${correctNumberUser} per un totale di ${correctNumberUser.length} punti! `
                }
                else if (correctNumberUser.length < 1) {
                    result.innerText = 'Non hai indovinato nessun numero! 0 Punti!'
                }
                console.log(userNumber)
                console.log(numbers)
                console.log(correctNumberUser)


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