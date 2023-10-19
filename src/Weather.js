import React from "react";
import "./Weather.css"

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                    <input type="Search" placeholder="Enter a city..."  className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                    <input type="Submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.vbvM8BF6Hqri_DTesS4ZvQHaHa&pid=Api&P=0&h=220" alt="Mostly Cloudy" width="60"  className="float-left"/>
                       <div className="float-right">
                       <span className="temperature">6</span>
                        <span className="unit">℃|℉</span> 
                        </div> 
                        
                        </div>
                    
                    
                    
                      
                </div>
                <div className="col-6">
                    <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: 70%</li>
                    <li>Wind: 13km/h</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}