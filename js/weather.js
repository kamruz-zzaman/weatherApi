const loadWeather = () => {
    const getWeather = document.getElementById('input');
    const valueWeather = getWeather.value;
    url = `http://api.weatherstack.com/current?access_key=78cea249bb9983f27410b4b12d7af9d1&query=${valueWeather}`
    fetch(url)
        .then(res => res.json())
        .then(data => setData(data))

    getWeather.value = '';
}
const setData = data => {
    const getCurrentData = data.current;
    const location = data.location;
    const div = document.getElementById('div');
    div.innerHTML = `
        <div class="result-1">
            <img width="50%" src="${getCurrentData.weather_icons[0]}">
            <h2>${location.name},${location.country}</h2>
            <h2>${getCurrentData.temperature} degree celcius</h2>
            <h3>${getCurrentData.weather_descriptions[0]}</h3>
        </div>`
}
const difault = () => {
    url = `http://api.weatherstack.com/current?access_key=78cea249bb9983f27410b4b12d7af9d1&query=Dhaka`
    fetch(url)
        .then(res => res.json())
        .then(data => setDifault(data))
}
difault()
const setDifault = (data) => {
    const getCurrentData = data.current;
    const location = data.location;
    const div = document.getElementById('div');
    div.innerHTML = `
        <div class="result-1">
            <img width="50%" src="${getCurrentData.weather_icons[0]}">
            <h2>${location.name},${location.country}</h2>
            <h2>${getCurrentData.temperature} degree celcius</h2>
            <h3>${getCurrentData.weather_descriptions[0]}</h3>
        </div>`
}

