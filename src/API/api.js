import * as axios from "axios";


  export const weatherApi = {

    getCityWeather(city){
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=96ac09eae61bc5e0738806f5dd75706c`).then(response => {
            return response.data;
        })
    },
  }
