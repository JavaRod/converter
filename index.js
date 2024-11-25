/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const M = 'meter';
const FT = 'feet';
const L = 'liter';
const LG = 'gallon';
const KG = 'kilogram';
const LB = 'pound';

const feet_meter_text = document.getElementById('units');
const liter_gallon_text = document.getElementById('units');
const kg_pound_text = document.getElementById('units');

// HTML:
// <input id="myInput" type="text">
// <button onclick="getValue()">Submit</button>

function convert() {
    const value = document.getElementById('units').value;
    console.log('Input value:', value);

    document.getElementById('meter-feet').textContent = `${value} meters = ${conversion(M, FT, value)} feet | ${value} feet = ${conversion(FT, M, value)} meters`;
    document.getElementById('liter-gallon').textContent = `${value} liters = ${conversion(L, LG, value)} gallons | ${value} gallons = ${conversion(LG, L, value)} liters`;
    document.getElementById('kilogram-pound').textContent = `${value} kilograms = ${conversion(KG, LB, value)} pounds | ${value} pounds = ${conversion(LB, KG, value)} kilograms`;
}

function conversion(from, to, input) {

    let result;

    if (from == M && to == FT) {
        result = input * 3.281;
    } else if (from == FT && to == M) {
        result = input / 3.281;
    } else if (from == L && to == LG) {
        result = input * .264;
    } else if (from == LG && to == L) {
        result = input / .264;
    } else if (from == KG && to == LB) {
        result = input * 2.204;
    } else if (from == LB && to == KG) {
        result = input / 2.204;
    } else {
        console.log(`Error: Undefined unit from ${from} to ${to}`);
    }

    result = result.toFixed(3);
    console.log(result);
    return result;


}

