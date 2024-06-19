// -- variables --

const form = document.querySelector('form')

let inputAdults = document.querySelector('#adults')
let inputKids = document.querySelector('#kids')
let inputTiming = document.querySelector('#timing')

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