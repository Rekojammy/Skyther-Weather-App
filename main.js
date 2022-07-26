function _(query) {
    return document.querySelector(query);
}

const form = _('#form');
const lginput = _('#lginput');
const search = _('#search');
const country = _('#country');
const temperature = _('#temp');
const icon = _('#icon');
const forecast = _('#forecast');
const humidity = _('#humidity');
const speed = _('#speed');
const container = _("#weather");
const smallcont = _('#smallcont');
const lgBackground = _('#lgBackground');

const menu = _('#menu');
const menuBtn = _('#menuBtn');
const closeMenuBtn = _('#closeMenuBtn');



const form1 = _('#form1');
const lginput1 = _('#lginput1');
const searchBtn = _('#searchBtn');
const country1 = _('#country1');
const temperature1 = _('#temp1');
const icon1 = _('#icon1');
const forecast1 = _('#forecast1');
const humidity1 = _('#humidity1');
const windSpeed = _('#windSpeed');
const need = _('#need');
const needicon = _('#needicon');
const bgImage = _('#bgImage')
let defaultCity = 'Port Harcourt'


// ============= Background Pictures ========================================================================

let rainBg = ['./img/pexels-aline-nadai-1887792.jpg', './img/pexels-subrata-deb-2447531.jpg', './img/pexels-victoria-borodinova-1619719.jpg',
            './img/pexels-andre-furtado-2961360.jpg', './img/pexels-nur-andi-ravsanjani-gusma-1915182.jpg', './img/pexels-oleksandr-pidvalnyi-2144326.jpg']

let sunBg = ['./img/pexels-almada-studio-1869961.jpg', './img/pexels-guillaume-hankenne-2792078.jpg', 
            './img/pexels-this-is-zun-1140703.jpg', './img/pexels-hitwave-12618632.jpg',  './img/pexels-jaime-reimer-2679814.jpg',  './img/pexels-lisa-2043035.jpg']

let cloudBg = ['./img/pexels-alex-conchillos-3888585.jpg', './img/pexels-szabolcs-toth-3283907.jpg', './img/pexels-ave-calvar-martinez-3010340.jpg', 
            './img/pexels-guilherme-rossi-1755683.jpg', './img/pexels-james-wheeler-1486974.jpg', './img/pexels-matheus-potsclam-barro-1828305.jpg', 
            './img/pexels-pixabay-52531.jpg', './img/pexels-ricardo-esquivel-1806766.jpg']

let windBg = ['./img/pexels-jan-koetsier-2724373.jpg', './img/pexels-wendy-wei-2820808.jpg', './img/pexels-anastasia-shuraeva-4513209.jpg', './img/pexels-mitch-kesler-2742684.jpg',
             './img/pexels-ricardo-esquivel-2946870.jpg', './img/pexels-roberto-shumski-1903707.jpg', './img/pexels-messala-ciulla-936548.jpg']

let winterBg = ['./img/photo-1545885785-910f3bbf07a8.jpg',]

let clearBg = ['./img/pexels-vlad-chețan-2279334.jpg', './img/pexels-james-wheeler-1486974.jpg']

let thunder = ['./img/pexels-lachlan-ross-6510344.jpg', './img/pexels-nikolett-emmert-2947810.jpg', './img/pexels-takenbytablo-680940.jpg', './img/pexels-юрий-лаймин-9184517.jpg']


// =============== Getting Random Images ======================================================================
function randomPics(e) {
    return Math.floor(Math.random() * e.length);
}



// ============ FOR SMALL SCREEN ============================================================================

let weather1 = {
    apiKey: "77ff7535c236abf0512b0f14802f9848",
    apiUrl: "https://api.openweathermap.org/data/2.5/weather?q={cityname}&units=metric&appid={APIkey}",
    fetchWeather: function (cityname) {
        let url = this.apiUrl.replace("{cityname}", cityname).replace("{APIkey}", this.apiKey);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.showWeather(data);
            }
            )
            .catch(error => console.log(error));  // error handling 
    },

    
    showWeather: function (data) {
        // const {name} = data
        // const {icons, descript} = data.weather
        // const {temperature, humid} = data.main
        // const {windspeed} = data.wind;
        if (data.name == undefined) {
            alert('City not Found! Please enter a valid city name')
            return;
        } else {
            country1.innerText = data.name;
            temperature1.innerText = data.main.temp + "°C";
            icon1.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
            forecast1.innerText = data.weather[0].description.toUpperCase();
            windSpeed.innerText = data.wind.speed + "km/h";
            humidity1.innerText = data.main.humidity + "%"
        }
    },

    searchbar: function () {
        this.fetchWeather(lginput1.value)
    },

    loaded1: function () {
        this.fetchWeather(defaultCity)
    }
}

form1.addEventListener('submit', (e) => {
    displayNeed()
    e.preventDefault()
    weather1.searchbar()
    showWeather()
});

window.addEventListener('DOMContentLoaded', () => {
    displayNeed()
    setTimeout(() => {
        weather1.loaded1()
        showWeather()
    }, 3000)

});






// ============ FOR LARGE SCREEN ============================================================================

let weather = {
    apiKey: "77ff7535c236abf0512b0f14802f9848",
    apiUrl: "https://api.openweathermap.org/data/2.5/weather?q={cityname}&units=metric&appid={APIkey}",
    fetchWeather: function (cityname) {
        let url = this.apiUrl.replace("{cityname}", cityname).replace("{APIkey}", this.apiKey);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.showWeather(data);
            }
            )
            .catch(error => console.log(error));  // error handling 
    },




    showWeather: function (data) {
        // const {name} = data
        // const {icons, descript} = data.weather
        // const {temperature, humid} = data.main
        // const {windspeed} = data.wind;

        country.innerText = data.name;
        temperature.innerText = data.main.temp + "°C";
        icon.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
        forecast.innerText = data.weather[0].main;
        speed.innerText = data.wind.speed + "km/h";
        humidity.innerText = data.main.humidity + "%"
    },

    searchbar: function () {
        this.fetchWeather(lginput.value)
    },

    loaded: function () {
        this.fetchWeather(defaultCity)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    weather.searchbar()
    showWeather()
    smallcont.style.display = 'block';
    lginput.value = '';
})

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        weather.loaded()
        showWeather()
    }, 3000)
});


// =============== SHOWING WEATHER COMPLEMENTS ============================================================================
function displayNeed() {
    setTimeout(() => {
        if (forecast1.innerText.includes('RAIN') || forecast1.innerText.includes('SHOWER')) {
            need.innerText = 'I think it is gonna Rain and you should go out with an Umbrella';
            needicon.src = './iconimg/white-umbrella-and-rain-drops-icon-isolated-vector-27847316-removebg-preview (1).png';
            let random = Math.floor(Math.random() * rainBg.length)
            bgImage.src = rainBg[random]
            lgBackground.src = rainBg[random]

        } else if (forecast1.innerText.includes('SUNNY') || forecast1.innerText.includes('SUN')) {
            need.innerText = 'It is probably a Sunny weather wear Something light and Chill out!';
            needicon.src = './iconimg/pineapple-shake-blue-pina-colada-drink-cocktail-milkshake-removebg-preview.png'
            let random = Math.floor(Math.random() * sunBg.length)
            bgImage.src = sunBg[random]
            lgBackground.src = sunBg[random]

        } else if (forecast1.innerText.includes('CLOUDS') || forecast1.innerText.includes('CLOUDY')) {
            need.innerText = 'It is probably gonna be Cloudy with some Winds. Wear a coat';
            needicon.src = './iconimg/LjecRSc3LVNrbvM-removebg-preview.png'
            let random = Math.floor(Math.random() * cloudBg.length)
            bgImage.src = cloudBg[random]
            lgBackground.src = cloudBg[random]

        } else if (forecast1.innerText.includes('SNOW') || forecast1.innerText.includes('WINTER')) {
            need.innerText = 'The Snow is coming. Wear a Jacket or a Coat';
            needicon.src = './iconimg/1540837275-1505507422-llbean-ultrawarm-coat-1-1540837260-removebg-preview.png'
            let random = Math.floor(Math.random() * cloudBg.length)
            bgImage.src = winterBg[random]
            lgBackground.src = winterBg[random]

        } else if (forecast1.innerText.includes('THUNDER') || forecast1.innerText.includes('LIGHTENING')) {
            need.innerText = 'Close your ears and stay at home. It is gonna be loud outside with some Thunder claps!';
            needicon.src = './iconimg/a-humble-judge-of-cloud-stormy-cartoon-character-design-wearing-glasses-2BFGN2H-removebg-preview.png'
            let random = Math.floor(Math.random() * cloudBg.length)
            bgImage.src = thunder[random]
            lgBackground.src = thunder[random]

        } else if (forecast1.innerText.includes('WIND') || forecast1.innerText.includes('WINDY')) {
            need.innerText = 'Hold your breath and you hats. It is gonna be a Windy day!';
            needicon.src = './iconimg/855-8559362_rain-images-cartoon-umbrella-and-wind-clipart-removebg-preview.png'
            let random = Math.floor(Math.random() * cloudBg.length)
            bgImage.src = windBg[random]
            lgBackground.src = windBg[random]
        } else {
            need.innerText = 'It is an clear nice day. Wear Something nice!';
            needicon.src = './iconimg/icon-rainbow-vector-1387400-removebg-preview.png';
            let random = Math.floor(Math.random() * clearBg.length)
            bgImage.src = clearBg[random]
            lgBackground.src = clearBg[random]
        }
    }, 5000);
}

// =============== MENU AND UTILITIES ============================================================================

menuBtn.addEventListener('click', () => {
    menu.classList.remove('hidden')
    menuBtn.classList.add('hidden')
    closeMenuBtn.classList.remove('hidden')
})

closeMenuBtn.addEventListener('click', () => {
    menu.classList.add('hidden')
    menuBtn.classList.remove('hidden')
    closeMenuBtn.classList.add('hidden');
})
