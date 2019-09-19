import React from "react";
import { connect } from 'react-redux';
import {getWeatherThunk} from "../Store/weatherReducer";
import InnerCity from "./UI/innerCity";

class city extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render(){
        return(
            <div>
        <InnerCity thunk={this.props.getWeatherThunk} 
        temperature={this.props.temperature}
        city={this.props.city}
        icon={this.props.icon}
        
         />
            </div>
        )
    }
}
let mapStateToProps = (store)=>({
temperature:store.weather.temperature,
city:store.weather.city,
icon:store.weather.icon,

})
let CityConteiner = connect(mapStateToProps,{getWeatherThunk})(city);

export default CityConteiner;