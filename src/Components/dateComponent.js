import React from "react";
import styles from "./data.module.css";
import { connect } from 'react-redux';
class date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let now = new Date();
    if (now.getDate() < 10) {
      var data = `0${now.getDate()}`;
    } else {
      data = now.getDate();
    }
    if (now.getMonth() < 10) {
      var month = `0${now.getMonth()}`;
    } else {
      month = now.getMonth();
    }
    if (now.getHours() < 10) {
      var hours = `0${now.getHours()}`;
    } else {
        hours = now.getHours();
    }
    if (now.getMinutes() < 10) {
      var minutes = `0${now.getMinutes()}`;
    } else {
        minutes = now.getMinutes();
    }
    let cityrequest = this.props.city === "city"?"":this.props.city;
    let countryrequest = this.props.city === "city"?"":this.props.country;
    return (
      <div className={styles.allDate}>
        <div className={styles.time}>
          <div>
            {data}:{month}:{now.getFullYear()}
          </div>
          <div className={styles.hours}>
            {hours}:{minutes}
          </div>
        </div>
        <div className={styles.country}>
        {cityrequest} {countryrequest}
        </div>
        
      </div>
    );
  }
}
let mapStateToProps = (store)=>({
    city:store.weather.city,
    country:store.weather.country,
})
let DateComponent = connect(mapStateToProps)(date) ;
export default  DateComponent;
