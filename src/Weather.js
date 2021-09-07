import React, {useState,useEffect} from 'react';
const apikey="d7bf88d28b41a529d691447d0189f892"
const apibase="http://api.openweathermap.org/data/2.5/"

function Weather({name}){
    const[weather, setWeather]=useState([])
    useEffect(()=>{
        fetch(`${apibase}weather?q=${name}&units=metric&APPID=${apikey}`).then(
            response => {
               return response.json();
            }
        ).then(results=>{
            setWeather(results);
        })
    },[name]);
    if(weather.main !== undefined){
        return(
            <div style={{position:'absolute',top:'38%',left:'30%',color:'white',backgroundColor:'#0000FF',borderRadius:'10px'}}>
            
            <div style={{ display:'flex',padding:'10px',margin:'10px'}}>
                <div style={{marginRight:'30px'}}>
                <h1>{weather.name},{weather.sys.country}</h1>
                <h2>{weather.weather[0].description}</h2>
                </div>
                <div>
                    <h1 style={{fontSize:'4em',marginLeft:'auto',marginTop:'10%'}}>{weather.main.temp}<sup>0</sup>C</h1>
                </div>
        
            </div>
            <div style={{display:'flex',backgroundColor:'#708090',margin:'0px',padding:'4px',borderRadius:'10px'}}>
                <div style={{marginLeft:'5%',marginTop:'3%',marginBottom:'3%'}}>
                    <h5>pressure:{weather.main.pressure}hPa</h5>
                    <h5>humidity:{weather.main.humidity}%</h5>
                    <h5>visibility:{weather.visibility/1000}km</h5>
                </div>
                <div style={{marginLeft:'20%',marginTop:'3%',marginBottom:'3%',marginRight:'20px'}}>
                    <h5>Temp min: {weather.main.temp_min}<sup>0</sup>C</h5>
                    <h5>Temp max: {weather.main.temp_max}<sup>0</sup>C</h5>
                </div>
            </div>
        </div>
        );
    }
    return(
        <div style={{padding:'20px',position:'absolute',top:'38%',left:'36%',color:'white',backgroundColor:'#0000FF',borderRadius:'10px'}}>
            <h1>city not available</h1>    
        </div>
    );
    
}
export default Weather;