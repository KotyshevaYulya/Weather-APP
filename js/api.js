const API_KEY = "2a8c99d832e13754b45ea40dc61cccc1";
const BASE_URL = "http://api.openweathermap.org";


// !------- get coordinates ----

export async function getCoordinates(cityName) {
    if (!cityName) throw new Error("Місто не задано");

    const res = await fetch(`${BASE_URL}/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`);
    if (!res.ok) {
        throw new Error("Server connection error");
    }
    const cities = await res.json();
    return cities;
}

// !-------- get weather

export async function getCurrentWeather(lat, lon) {
    const res = await fetch(`${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    if (!res.ok) {
        throw new Error("Server connection error");
    }
    return await res.json();
}


// !!!!!! ---- Defaul weather --------

export async function getDefaultCity(cityName) {
    const res = await fetch(`${BASE_URL}/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`);
    if (!res.ok) {
        throw new Error("Server connection error");
    }
    const [city] = await res.json();
    return city;
}

// !------- get weather for 5 days


export async function getWeatherForFiveDays(lat, lon) {
    const res = await fetch(`${BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
    if (!res.ok) {
        throw new Error("Server connection error");
    }
    const { list } = await res.json();
    return list;
}