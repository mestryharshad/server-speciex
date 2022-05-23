import React from 'react';
import "./Speciex.css" 
import { Link } from "react-router-dom";
const Speciex = () => {
    return (
        <div>
            <div className="Swap-Main-Container">
      <div className="Swap-Card-Container">
        <div className="Swap-Heading">
          <h2>Swap</h2>
          <p>Exchange Trade Tokens in an instant</p>
        </div>
        <div className="Swap-input">
          
            
          <input type="number"
            placeholder='Speciex' className="BUSD-Input"/><br/>
            <div className="Swap-Button">
            <button><Link to="/" style={{fontSize:"17px",fontWeight:"bolder",color:"white",textDecoration:"none"}}>Swap</Link></button>
          </div>
            <input type="number"
              placeholder='BUSD'
             className="Speciex-Input"/><br/>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Speciex;