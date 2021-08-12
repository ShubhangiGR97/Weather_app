import axios from "axios";
const api_key = "c1f22d99ed5a4aabdbf8399ad8bc63bb";
const appId = `&appid=${api_key}`;
axios.defaults.baseURL = `http://api.openweathermap.org/data/2.5/`;


function getCurrentWeather(Location){
    return axios.get(`weather?q=${Location}${appId}`);
}

function getForecast(lat, lon){
    return axios.get(`onecall?lat=${lat}&lon=${lon}${appId}`);
}
export {getCurrentWeather, getForecast}