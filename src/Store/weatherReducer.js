import {weatherApi} from "../API/api";

export const getWeatherCityAC = (city,country,temp,icon)=>({
    type:weatherSity,
    city,country,temp,icon
});

let initialState = {
    city:'city',
    country:null,
   temperature:null,
   icon:null,

}
const weatherSity = "WEATHER_SITY";
let weatheReducer = (state = initialState,action) =>{
    switch (action.type){
        case weatherSity :{
            return{
                ...state,
                    city:action.city,
                    country:action.country,
                    temperature:action.temp,
                    icon:action.icon,

            }
        }
        default:
            return state;
    }
}
export const getWeatherThunk = (city)=>{
    return(dispatch)=>{
        
      
        weatherApi.getCityWeather(city).then(data=>{
            dispatch(getWeatherCityAC(city,data.sys.country,data.main.temp,data.weather[0].icon))
        })
        
    }
}
export default weatheReducer;