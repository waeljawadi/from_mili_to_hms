import React from 'react'
import './style/style.css'
import Calcul from './Calcul'

const separateur = <span className="verybold">:</span>
const result_fonction = Calcul(100000);
const Timer = () =>
{
    return (
        <React.Fragment>
            <span className="verybold one">{result_fonction[0]}</span>{separateur}
            <span className="verybold two">{result_fonction[1]}</span>{separateur}
            <span className="verybold three">{result_fonction[2]}</span>
            <p></p>
            <button>Start</button>
            <button>Stop</button>
        </React.Fragment>
    )
}
export default Timer 