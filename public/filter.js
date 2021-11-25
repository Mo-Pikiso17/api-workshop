const carBrand = document.querySelector('.cB');
const brandBtnElem = document.querySelector('.btn');

const templateCarB = document.querySelector('.carBrand');
const template4 = Handlebars.compile(templateCarB.innerText);


// const carColors = document.querySelector('.cC');
// const colorBtnElem = document.querySelector('.btns');

// const templateColor = document.querySelector('.carColor');
// const template5 = Handlebars.compile(templateColor.innerText);

// specific make for a car
brandBtnElem.addEventListener("click", function () {
    var model = document.querySelector('.carBrands').value;
    var modelColor = document.querySelector('.colorB').value;

    console.log(model)

    axios.get(`https://api-tutor.herokuapp.com/v1/cars/make/${model}/color/${modelColor}`)
    // /v1/cars/make/:make/color/:car_color	
        .then(function (result) {
            console.log(result.data);

            carBrand.innerHTML = template4({ carBrnd: result.data })

        })


});

// colorBtnElem.addEventListener("click", function () {
//     var modelColor = document.querySelector('.colorB').value;
//     console.log(modelColor)

//     axios.get(`http://api-tutor.herokuapp.com/v1/cars/color/${modelColor}`)

//         .then(function (result) {
//             console.log(result.data);

//             carColors.innerHTML = template5({ carCol: result.data })

//         })


// });