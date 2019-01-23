import React from 'react'
import Affichage from './Affichage'
import Fndecompose from './Fndecompose'
import './style/style.css'


 

class Timer extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {compteur : 0}
        this.stopit = this.stopit.bind(this)
        this.playit = this.playit.bind(this)
    }

    myvar  =  () =>  setInterval(this.playit,1000)
    playit = () => this.setState({compteur : this.state.compteur+1000})
    
        

    

    stopit = () =>{
        clearInterval(() => this.myVar());
    }










    
    

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
                    <button onClick={this.myvar}>Start</button>
                    <button onClick={this.stopit}>Stop</button>
                </React.Fragment>
            ) 
        }
}
export default Timer 