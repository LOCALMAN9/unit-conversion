/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meter = 3.281
const liter = 0.264
const kg = 2.204
const btnEl = document.getElementById("btn-el")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")


btnEl.addEventListener("click", () => {
    convertLength()
    convertVolume()
    convertMass()
    inputEl.value = ""
})

function convertLength() {
    let feetValue = Number(inputEl.value * meter).toFixed(3)
    let meterValue = Number(inputEl.value / meter).toFixed(3)
    lengthEl.textContent = `
    ${inputEl.value} meters = ${feetValue} feet 
    | ${inputEl.value} feet = ${meterValue} meters
    `
}

function convertVolume() {
    let gallonValue = Number(inputEl.value * liter).toFixed(3)
    let literValue = Number(inputEl.value / liter).toFixed(3)
    volumeEl.textContent = `
    ${inputEl.value} liters = ${gallonValue} gallons 
    | ${inputEl.value} gallons = ${literValue} liters
    `
}

function convertMass() {
    let poundsValue = Number(inputEl.value * kg).toFixed(3)
    let kilosValue = Number(inputEl.value / kg).toFixed(3)
    massEl.textContent = `
    ${inputEl.value} kilos = ${poundsValue} pounds 
    | ${inputEl.value} pounds = ${kilosValue} kilos
    `
}