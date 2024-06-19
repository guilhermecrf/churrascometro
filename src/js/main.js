// -- variables --

const form = document.querySelector('form')

let inputAdults = document.querySelector('#adults')
let inputKids = document.querySelector('#kids')
let inputTiming = document.querySelector('#timing')

// -- prevent form default (e) and calculate 
// -- and calculating how much barbecue you will need

form.onsubmit = event => {
    event.preventDefault()

    let adults = inputAdults.value
    let kids = inputKids.value
    let timing = inputTiming.value

    let totalAmountMeat = meatPerPerson(timing) * adults + (meatPerPerson(timing) / 2 * kids)
    let totalAmountBeer = beerPerPerson(timing) * adults
    let totalAmountDrinks = drinksPerPerson(timing) * adults + (drinksPerPerson(timing) / 2 * kids)

    displayResultMessage(totalAmountMeat, totalAmountBeer, totalAmountDrinks)
}

function meatPerPerson(timing) {
    if(timing >= 6) {
        return 650
    }else {
        return 400
    }
}

function beerPerPerson(timing) {
    if(timing >= 6) {
        return 2000
    }else {
        return 1200
    }
}

function drinksPerPerson(timing) {
    if(timing >= 6) {
        return 1500
    }else {
        return 1000
    }
}

// -- modal pop-up --

function displayResultMessage(totalAmountMeat, totalAmountBeer, totalAmountDrinks) {
    const message = `Precisará de ${totalAmountMeat / 1000} kg de carne, ${Math.ceil(totalAmountBeer / 355)} latas de cerveja e, ${Math.ceil(totalAmountDrinks / 2000)} garrafas de bebidas.`

    Modal.message.innerText = message
    Modal.open()
}