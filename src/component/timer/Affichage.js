
import React from 'react'
const separateur = <span className="verybold">:</span>
const Affichage = (props) =>
{
    return (
        <React.Fragment>
            <span className="verybold one">{props.hours}</span>{separateur}
            <span className="verybold two">{props.minutes}</span>{separateur}
            <span className="verybold three">{props.secondes}</span>
            <p></p>
        </React.Fragment>
    )
  }
  export default Affichage
