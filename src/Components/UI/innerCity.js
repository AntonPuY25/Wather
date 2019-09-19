import React from "react";
import styles from "../city.module.css";


class InnerCity extends React.Component {
    
    constructor(props){
        super(props)
        this.myRefCity = React.createRef();


        this.state = {

        }
    }
  changeCity = ()=>{
    this.props.thunk(this.myRefCity.current.value);
    
  }
    render(){
        
        let tempRequest = this.props.city === "city"?null:this.props.temperature;
        if(tempRequest === null){
            var resultTemp = ""
            var resultIcon = "50n"
        }else{
            var resultTemp =  Math.round(tempRequest);
            var resultIcon = this.props.icon
        }
        return(
            <div className={styles.allCity}>
         <div className={styles.inputCity}>
         
    <select ref={this.myRefCity}  onChange={this.changeCity}>
         <option value="city">City</option>
        <option value="Minsk">Минск</option>
        <option value="Moscow">Москва</option>
        <option value="Kiev">Киев</option>
    </select>
    
    <div className={styles.iconTemp}>
    <img src={require('../../Images/icons/'+resultIcon+'.png')}/>
    </div>
    <div className={styles.dataTemp}>
    {resultTemp ? <div>{resultTemp} <sup>0</sup>C</div>:""}

    </div>
         </div>
            </div>
        )
    }
}


export default InnerCity;