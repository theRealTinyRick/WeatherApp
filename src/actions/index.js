const API_KEY='87167de7f5e5fa4f61fc130156fd975f';

export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
   
export function fetchWeather(){
    return {
        type : FETCH_WEATHER
    }
}