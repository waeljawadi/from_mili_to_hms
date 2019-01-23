import React from 'react'
import Affichage from './Affichage'
import Fndecompose from './Fndecompose'
import './style/style.css'


 
class Timer extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            compteur : 0
        }
    }
        play   = () =>   this.intervalID = setInterval(() =>  this.setState({compteur : this.state.compteur+1000}), 1000)
        stop   = () =>   clearInterval(this.intervalID)
        reset  = () =>   this.setState({compteur: 0})      
        render()
        {
            return (
                <React.Fragment>
                    <Affichage  
                        hours={Fndecompose(this.state.compteur)[0]}
                        minutes={Fndecompose(this.state.compteur)[1]}
                        secondes={Fndecompose(this.state.compteur)[2]}
                    />
                    <p></p>
                    <button onClick={this.play}>Start</button>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.reset}>Reset</button>
                </React.Fragment>
            ) 
        }
}
export default Timer 