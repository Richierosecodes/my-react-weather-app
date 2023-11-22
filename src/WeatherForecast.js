import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast() {
    function handleResponse(response) {
        
    }
    let apiKey = "cf4b8d4et700d15264c45doca5caf311";
    let latitude = 38.71667;
    let longitude = -9.13333
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    

    return <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Thu</div>
                <WeatherIcon code = "01d" size={36} />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">19°</span>
                    <span className="WeatherForecast-temperature-min">10°</span>
                </div>
            </div>

            <div className="col">
                <div className="WeatherForecast-day">Thu</div>
                <WeatherIcon code = "01d" size={36} />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">19°</span>
                    <span className="WeatherForecast-temperature-min">10°</span>
                </div>
            </div>

            <div className="col">
                <div className="WeatherForecast-day">Thu</div>
                <WeatherIcon code = "01d" size={36} />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">19°</span>
                    <span className="WeatherForecast-temperature-min">10°</span>
                </div>
            </div>

            <div className="col">
                <div className="WeatherForecast-day">Thu</div>
                <WeatherIcon code = "01d" size={36} />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">19°</span>
                    <span className="WeatherForecast-temperature-min">10°</span>
                </div>
            </div>

            <div className="col">
                <div className="WeatherForecast-day">Thu</div>
                <WeatherIcon code = "01d" size={36} />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">19°</span>
                    <span className="WeatherForecast-temperature-min">10°</span>
                </div>
            </div>

            <div className="col">
                <div className="WeatherForecast-day">Thu</div>
                <WeatherIcon code = "01d" size={36} />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">19°</span>
                    <span className="WeatherForecast-temperature-min">10°</span>
                </div>
            </div>
        </div>
    </div>
}