let result= document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityref = document.getElementById("city");


let key="50be49934ceaa2e92036b279be547f55";


let getWeather =()=>{
    let cityValue= cityref.value;

    if(cityValue.length=== 0){
        result.innerHTML='<h3>Please Enter a City Name</h3>';

    }

    else {
        console.log(key);
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric `;
        cityref.value="";
        console.log(key);
        fetch(url)
        .then((resp) => resp.json())

        .then((data) =>{
            console.log(data);
            result.innerHTML=`<h2>${data.name}</h2>
            <h4 class="weather">${data.weather[0].main}
            <h4 class="weather">${data.weather[0].description}</h4>
            <img src ="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp}&deg;C.</h1>
            <div class="temp-container">
                <div>
                    <h4 class="title">max</h4>
                    <h4 class="temp">${data.main.temp_max}</h4>
                    <h4 class="title">min</h4>
                    <h4 class="temp">${data.main.temp_min}</h4>
            </div>
            `;

        }
        )

        .catch(()=> {
            result.innerHTML='<h3> City is not found</h3>';
        }
        )
    }
}
searchBtn.addEventListener("click",getWeather);
window.addEventListener("load",getWeather);
