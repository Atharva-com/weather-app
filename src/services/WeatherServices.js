import { DateTime } from "luxon"

const API_KEY = "2153447db327c71b78162ee2ad40ae32"
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType, searchParamas) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({ ...searchParamas, appid: API_KEY })
    return fetch(url)
        .then((res) => res.json())
        .then((data) => data)
}

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly} = data;
    // daily = daily.map((d) => {
    //     return {
    //         title: formatToLocalTime(d.dt, timezone, 'ccc'),
    //         temp: d.temp.day,
    //         icon: d.weather[0].icon
    //     }
    // })

    // hourly = hourly.map(d => {
    //     return {
    //         title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
    //         temp: d.temp,
    //         icon: d.weather[0].icon
    //     }
    // })

    return { timezone, daily, hourly}
}
const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data

    const { main: icon } = weather[0]

    return { lat, lon, temp, feels_like, temp_max, temp_min, humidity, name, dt, country, sunrise, sunset, icon, speed }
}

const getFormattedWeatherData = async (searchParamas) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParamas).then(formatCurrentWeather)

    const { lat, lon } = formattedCurrentWeather

    const formattedForecastWeather = await getWeatherData("onecall", {
        lat, lon, exclude: 'current,minutely,alerts', units: searchParamas.units,
    }).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather}
}


const formatToLocalTime = (sec, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(sec).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;


export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };

