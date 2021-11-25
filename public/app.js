const color = document.querySelector('.colors');
const brand = document.querySelector('.brands');
const car = document.querySelector('.cars');



const templateColor = document.querySelector('.colorT');
const template1 = Handlebars.compile(templateColor.innerText);

const templateMake = document.querySelector('.makeT');
const template2 = Handlebars.compile(templateMake.innerText);

const templateCar = document.querySelector('.carT');
const template3 = Handlebars.compile(templateCar.innerText);

axios.get('https://api-tutor.herokuapp.com/v1/colors')
    .then(function (result) {

        color.innerHTML = template1({ color: result.data });

    });

axios.get('https://api-tutor.herokuapp.com/v1/makes')

    .then(function (result) {

        brand.innerHTML = template2({ make: result.data });

    })

axios.get('https://api-tutor.herokuapp.com/v1/cars')

    .then(function (result) {

        car.innerHTML = template3({ car: result.data })

    })





