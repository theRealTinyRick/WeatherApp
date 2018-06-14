import axios from 'axios';

const API_KEY='87167de7f5e5fa4f61fc130156fd975f';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;
   
export function fetchWeather(city){
    const url = ROOT_URL + "&q=" + city + ",us";
    const request = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload: request
    }
}