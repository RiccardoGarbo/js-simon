//*Trasferisco gli elementi della pagina

const buttonStartGame = document.getElementById('button')
const numbersPage = document.getElementById('numbers')
const timerPage = document.getElementById('timer')
const result = document.getElementById('result')
const numberUser = document.getElementById('user-number')
const inputNumber1 = document.getElementById('number1')
const inputNumber2 = document.getElementById('number2')
const inputNumber3 = document.getElementById('number3')
const inputNumber4 = document.getElementById('number4')
const inputNumber5 = document.getElementById('number5')
const buttonNumber = document.querySelector('.btn-number')
const messagePage = document.getElementById('message-page')
const messageRandomaNumber = document.getElementById('message-random-number')
const messageUserNumber = document.getElementById('message-user-number')
const messageNumbersPage = document.getElementById('message-numbers')



//Bottone di inizio partita
buttonStartGame.addEventListener('click', () => {
    //Mostro elementi dalla pagina
    timerPage.classList.remove('hidden')
    numbersPage.classList.remove('hidden')
    messagePage.classList.remove('hidden')

    //Nascondo elementi dalla pagina
    buttonNumber.classList.add('hidden')
    messageRandomaNumber.classList.add('hidden')
    messageUserNumber.classList.add('hidden')
    messageNumbersPage.classList.add('hidden')
    buttonStartGame.classList.add('hidden')
    numberUser.classList.add('hidden')

    //Creo una variabile array per inserire i numeri dell'utente
    let userNumber = []
    //Bottone per inserire i numeri dell'utente nel gioco
    buttonNumber.addEventListener('click', () => {
        let number1 = parseInt(inputNumber1.value)
        let number2 = parseInt(inputNumber2.value)
        let number3 = parseInt(inputNumber3.value)
        let number4 = parseInt(inputNumber4.value)
        let number5 = parseInt(inputNumber5.value)

        userNumber.push(number1)
        userNumber.push(number2)
        userNumber.push(number3)
        userNumber.push(number4)
        userNumber.push(number5)
    })
    console.log(userNumber)



    //Inserisco un messaggio all'elemento mostrato
    messagePage.innerText = ' Memorizza più numeri che riesci!'

    //Ripulisco il risultato
    result.innerText = ' '
    //Creo una variabile array per i numeri random del CPU
    let numbers = []


    //Genero 5 numeri diversi casuali da 1 a 100
    while (numbers.length < 5) {
        let number = parseInt(Math.floor(Math.random() * 100) + 1)
        if (!numbers.includes(number))
            numbers.push(number)
    }

    //Stampo i numeri casuali in pagina
    numbersPage.innerText = numbers.join(' - ')

    //Faccio partire il timer da 30
    let timer = 30

    //Stampo il timer in pagina
    timerPage.innerText = `TIMER: ${timer}`



    //*PRIMO TIMER
    const countDown = setInterval(function () {
        --timer
        timerPage.innerText = `TIMER: ${timer}`
        if (timer === 0) {
            timer = 15
            //Inserisco un messaggio nell'elemento in pagina
            messagePage.innerText = 'Inserisci i numeri che ricordi nelle caselle sottostanti!! Ricorda ad inviarli!!!'

            //Testo timer in pagina
            timerPage.innerText = `TIMER: ${timer}`

            //Nascosti i numeri random e il bottone di avvio partita
            numbersPage.classList.add('hidden')
            buttonStartGame.classList.add('hidden')

            //Compaiono gli imput per inserire i numeri del giocatore e il bottone per confermali
            numberUser.classList.remove('hidden')


            //Mostro il bottone per inserire i numeri del giocatore in JS
            buttonNumber.classList.remove('hidden')

            //Interrompo il primo timer
            clearInterval(countDown)




            //*SECONDO TIMER
            const secondCountDown = setInterval(function () {
                --timer
                timerPage.innerText = `TIMER: ${timer}`

                if (timer === 0) {
                    //Interrompo il secondo timer
                    clearInterval(secondCountDown)

                    //Nascondo elementi in pagina
                    timerPage.classList.add('hidden')

                    buttonNumber.classList.add('hidden')
                    messagePage.classList.add('hidden')
                    numberUser.classList.add('hidden')

                    //Mostro elementi in pagina
                    buttonStartGame.classList.remove('hidden')
                    messageNumbersPage.classList.remove('hidden')
                    messageRandomaNumber.classList.remove('hidden')
                    messageUserNumber.classList.remove('hidden')

                    //Modifico il testo del bottone di avvio partita
                    buttonStartGame.innerText = 'Riprova'

                    //Creo una variabile array per inserire i numeri che l'utente indovina
                    let correctNumberUser = []
                    console.log(correctNumberUser)
                    console.log(userNumber)

                    //Verifica dei numeri
                    for (let i = 0; i < numbers.length; i++) {
                        //Se tra i numeri random usciti in pagina è presente il numero inserito nell utente, allora lo aggiungo alla variabile dei numeri corretti
                        if (numbers.includes(userNumber[i])) {
                            correctNumberUser.push(userNumber[i])

                            //Creo il messaggio finale con numeri indovinati , punteggio, numeri CPU e numeri utente
                            result.innerText = `Hai indovinato questo/i numeri:${correctNumberUser} per un totale di ${correctNumberUser.length} punto/i! `
                            messageRandomaNumber.innerText = `I numeri usciti alla CPU sono: ${numbers}`
                            messageUserNumber.innerText = `I numeri inseriti da te sono: ${userNumber}`
                        }
                        //Se non inserisce alcun numero corretto
                        else if (correctNumberUser.length < 1) {
                            result.innerText = 'Non hai indovinato nessun numero! 0 Punti!'
                            messageRandomaNumber.innerText = `I numeri usciti alla CPU sono: ${numbers}`
                            messageUserNumber.innerText = `I numeri inseriti da te sono: ${userNumber}`
                        }
                    }

                }
            }, 1000)
        }
    }, 1000)
}
)