import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }
    
       

    
    if (loaded) {
        return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">Thu</div>
                <WeatherIcon code = "01d" size={36} />
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">19°</span>
                    {forecast[0].condition.temp.max}°
                    <span className="WeatherForecast-temperature-min">10°</span>
                    {forecast[0].condition.temp.min}°
                </div>
            </div>
        </div>
    </div>
        );
    
   
    
    }else{
        let apiKey = "cf4b8d4et700d15264c45doca5caf311";
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;
}

    }
