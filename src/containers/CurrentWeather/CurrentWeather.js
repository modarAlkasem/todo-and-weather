import React , {useState,useEffect} from "react";
import axios from "axios";
import Weather from "../../components/Weather/Weather";
import classes from './CurrentWeather.module.css';

const CurrentWeather = props=>{
    useEffect(()=>{
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=cairo&units=metric&appid='+process.env.REACT_APP_API_KEY)
            .then(res=>{
                setCurrentWeather(res.data);
                return axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=30.0626&lon=31.2497&exclude=hourly,minutely,current,alerts&units=metric&appid='+process.env.REACT_APP_API_KEY)
            })
            .then(res=>{
                setForcasts(res.data.daily.slice(1,6));
            })
    },[])
    const [cuurentWeather , setCurrentWeather] = useState(null);
    const [forcasts , setForcasts] = useState([]);
    let content = null;
    if(cuurentWeather){
        content =  (
            <React.Fragment>
            <div className={classes.WeatherCard}>
                <h3>Current Weather</h3>
                <Weather 
                    date = {new Date( cuurentWeather.dt*1000)}
                    location = {cuurentWeather.name+','+cuurentWeather.sys.country}
                    degree = {cuurentWeather.main.temp}/>
             </div>
             <div className={classes.WeatherForcasts}>
                       
                 {forcasts.map((forcast,index)=>{
                     return (
                        <div className={classes.WeatherCard} key = {index} >
                            <Weather 
                            
                            date = {new Date( forcast.dt*1000)} 
                            location = {cuurentWeather.name+','+cuurentWeather.sys.country}
                            degree = {forcast.temp.day}
                            flag

                            />
                     </div>);
                 })}

             </div>
             </React.Fragment>
        );
    }

    return content;
        
    
}

export default CurrentWeather;