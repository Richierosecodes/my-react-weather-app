import React from "react";
import FriendlyDate from "./FriendlyDate";

export default function WeatherInfo(props) {
    return (
        <div>
            
            <h1>{props.data.city}</h1>
                <ul>
                    <li>
                        <FriendlyDate date={props.data.date} />
                        </li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="d-flex">
                            <div className="float-left">
                            <img src= {props.iconUrl} alt= {props.data.description} width="60"/>
                            </div>
    
                            <div className="float-left">
                                <span className="temperature">{Math.round(props.data.temperature)}</span>
                                <span className="unit">℃|℉</span>
                            </div>
                        </div>         
                    </div>
                    <div className="col-6">
                        <ul>
                        <li>Humidity:{props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)} km/h</li>
                        </ul>
                    </div>
    
                </div>
        </div>
    );

    
}