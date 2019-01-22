import React from 'react'
import './style/style.css'


function timer(milliseconds){
    //Get hours from milliseconds
    var hours = milliseconds / (1000*60*60);
    var absoluteHours = Math.floor(hours);
    var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

    var minutes = (hours - absoluteHours) * 60;
    var absoluteMinutes = Math.floor(minutes);
    var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;

    var seconds = (minutes - absoluteMinutes) * 60;
    var absoluteSeconds = Math.floor(seconds);
    var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds; 
    
    let array_time = [];
    array_time.push(h);
    array_time.push(m);
    array_time.push(s)
    return array_time;
  }



  const separateur = <span className="verybold">:</span>
  const result_fonction = timer(100000);
const Timer = () =>
{
    return (
        <React.Fragment>
            <span className="verybold one">{result_fonction[0]}</span>{separateur}
            <span className="verybold two">{result_fonction[1]}</span>{separateur}
            <span className="verybold three">{result_fonction[2]}</span>
        </React.Fragment>
    )
}
export default Timer 