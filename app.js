

// API RENDER


// console.log(`WEATHER APP`);



// 0340d1177362401997950731241406    WEATHER API KEY


// http://api.weatherapi.com/v1/current.json?key=0340d1177362401997950731241406&q=London&aqi=no   



const form = document.querySelector(`#form`);
const city = document.querySelector(`#city`);
const card = document.querySelector(`#card`);


form.addEventListener("submit", (event) => {
    event.preventDefault();
    axios(
    `http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`
)

.then((res) => {

    console.log(res.data);

    card.innerHTML = `

     <div class="header">
            <h2>${res.data.location.name}</h2>
        </div>
    <div class="content">
        <div class="weather-icon">
            <img src="${res.data.current.condition.icon}" alt="Weather Icon">
              </div>
              <div class="weather-info">
              <p>${res.data.location.localtime} ,${res.data.location.country}</p>
                <h3>${res.data.current.temp_c}°C</h3>
              </div>
            </div>
            <div class="footer">
              <h4>${res.data.current.condition.text}</h4>
            </div>
    ` ;
})
.catch((err) => {
    console.log("error===>", err);
});

});





// axios(`http://api.weatherapi.com/v1/current.json?key=0340d1177362401997950731241406&q=London&aqi=no `);
