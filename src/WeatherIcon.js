import React from "react";
import ReactAnimatedWeather from "react-animated-weather";


export default function WeatherIcon(props) {
    const codeMapping = {
        "clear-sky-day": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
        "clear-sky-night": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
        "few-clouds-day": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
        "few-clouds-night": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png",
        "scattered-clouds-day": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png",
        "scattered-clouds-night": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png",
        "broken-clouds-day": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
        "broken-clouds-night": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png",
        "shower-rain-day": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png",
        "shower-rain-night": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png",
        "rain-day": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png",
        "rain-night": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png",
        "thunderstorm-day": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/thunderstorm-day.png",
        "thunderstorm-night": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/thunderstorm-night.png",
        "snow-day": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-day.png",
        "snow-night": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-night.png",
        "mist-day": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png",
        "mist-night": "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png"
    };




    return(
        <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#0B5ED7"
        size={props.size}
        animate={true}
      />
    );
}