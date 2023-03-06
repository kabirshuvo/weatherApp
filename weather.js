console.log('Weater Hot');

const API_KEY = 'df211c65e7005d0d920e663c04938644';

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data));
}

const displayTemparature = data => {
    // const temparature = document.getElementById('temparature');
    // temparature.innerText = data.main.temp;
    setInnerTextById('temparature', data.main.temp)
    setInnerTextById('clouds', data.weather[0].main)
    console.log(data.weather[0].main);
}

const setInnerTextById = (id, text) => {
    const temparature = document.getElementById(id);
    temparature.innerText = text;
}

document.getElementById('searchBtn').addEventListener('click', function(){
    const searchField = document.getElementById('SearchField');
    const city = searchField.value;
   
    document.getElementById('city-name').innerText = city;
    
    loadTemperature(city);
});




loadTemperature('dhaka');