import React from 'react';
import styles from "./App.module.css";
import DateComponent from "./Components/dateComponent";
import CityConteiner from './Components/cityComponents';
class App extends React.Component{
 
  render(){
    return(
      <div className={styles.app}>
      <DateComponent />
      <CityConteiner/>
   
      </div>
    )
  }
}
export default App;