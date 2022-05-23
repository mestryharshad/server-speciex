import React, { Component } from "react";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { BigNumber } from "bignumber.js";
import Swal from "sweetalert2";
class SellForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "BUSD",
    };
  }
  render() {
    
    const abc = () => {
      var userInput = this.props.parentState.imagesCount;
      console.log("userInput",userInput);
      var max = Math.floor(userInput/1000);
      console.log(max)
      var actualPercentage = 0.01;
      var convertednumber = 0;
      var totalSum = 0;
      // var evenNumberFlag = false;
      if(userInput === 1000){
          totalSum = 1000 / 0.01;
          // console.log("Value is" +totalSum)
          return totalSum;
      } else {
      if(userInput >= 1){
         if(userInput <= 1000){
             totalSum = userInput / 0.01;
         } else {
             totalSum = 1000 / 0.01;
         }
      }
      if(max===0){
        convertednumber =  userInput/0.01;
        // console.log("value is for less than 1000.   "+ convertednumber);
        //return convertedNumber;
      } else {
      for(var i=0;i<max;i++){
        // console.log("Rajesh")
        
        if(userInput%1000 === 0){
           if(i !=1){
              actualPercentage = actualPercentage + ((0.001/100) * actualPercentage);
           }else{
              //  console.log(actualPercentage); 
           }
           }else{
               actualPercentage = actualPercentage + ((0.001/100) * actualPercentage);
           }
        // console.log(actualPercentage);
        console.log("totalSum. Before "+ totalSum)
        if(userInput%1000 === 0){
           if(i !=1){
          totalSum += (1000)/actualPercentage;
           }else{
               console.log(i); 
           }
          // console.log("hiii");
        }else {
            if(i === max-1){
                totalSum += (userInput%1000)/actualPercentage;
                // console.log("hiifffffi");
            }else {
                totalSum += (1000)/actualPercentage;
                // console.log("hiifeeeeeei "  + i + "ddddd " + max);
            }
        }
        console.log("total sum after  " + totalSum);
      }
      convertednumber = userInput/actualPercentage;
      console.log("value is for >>>>>.   "+ totalSum);
      }
      console.log("totalSum",totalSum);
      return totalSum;
      } 
    }

    const countBuyCI = (val) => {
       
      var ethetovalue = abc();
      console.log("ethetovalue",ethetovalue);
       var why = ethetovalue - val;
      // console.log('why',why);

      var addtokenperbusd = ethetovalue - val;
      // if (ethetovalue==val && val==ethetovalue){
        if (ethetovalue == 100000 && val == 100000){
        totalSum1 = val * 0.01;
        return totalSum1;
        console.log("addtokenperbusd1",addtokenperbusd);
      }
      else{
        addtokenperbusd=ethetovalue-why;
        console.log("addtokenperbusd",addtokenperbusd);
      }
      
      // if (addtokenperbusd % 100000 == 0) {
      //   addtokenperbusd = val;
      // }
      // else{
      //   addtokenperbusd = ethetovalue - why ;
      // }
      console.log('addtokenperbusd',addtokenperbusd);
      // console.log("addtokenperbusd",addtokenperbusd);
      var actualPercentage = 0;
      var percentVal = [];
      var totalSum1 = 0;
      var calcList = [];
      if (val > ethetovalue) {
        Swal.fire({
          position: "top",
          icon: 'question',
          text: 'Insufficient Fund',
        })
        
      }
      // console.log("total busd",addtokenperbusd);
      if(addtokenperbusd){
        var modVal = addtokenperbusd%100000;
        var currentVal = addtokenperbusd - modVal;
        calcList.push(modVal > val ? val : modVal);
        while(addtokenperbusd > 0){
            actualPercentage = actualPercentage === 0 ? 0.01 : (actualPercentage + ((0.001 / 100) * actualPercentage));
            percentVal.push(actualPercentage);
            if((currentVal >= ethetovalue) && (ethetovalue > (currentVal - 100000))){
                calcList.push(currentVal - ethetovalue);
            } else if(currentVal >= ethetovalue){
                calcList.push(100000)
            }
            currentVal -= 100000;
            addtokenperbusd -= 100000;
        }
        // calcList.reverse();
        console.log(calcList, percentVal)
    }
    var percentlen = percentVal.length;
    calcList.forEach(function(val, index){
        console.log(val*percentVal[percentlen-index-1]);
          totalSum1 += (val*percentVal[percentlen-index-1]);
          console.log('totalSum1',totalSum1);
    })
    return totalSum1;
    
    }
    const busdCalculation = (value) => {
      var calculatedVal = countBuyCI(+this.input.value);
      // var l = this.props.parentState.imagesCount; 
      // console.log("recent",l);
      // console.log("atachi value",calculatedVal);
      // console.log("dushman",abc());
      this.setState({ output: calculatedVal })
      // console.log((calculatedVal),"a.b.c");
    }
    // console.log('imagesCount..sellform....', abc());
    return (
      <section>
        <div className="d-flex align-items-center justify-content-center">
          <button className="btn btn-primary-white --border" style={{ backgroundColor: 'white' }}>Swap</button>
          <button className="btn btn-primary-transparent"
            style={{
              backgroundColor: 'transparent', color: '#777c82', fontSize: '1.25rem',
              padding: '0.15rem 0.75rem',
              marginLeft: '1rem',
              borderRadius: '5px',
              border: '2px solid #777c82',
              width: '150px',
              fontFamily: 'Neutraface Text Bold',
            }}>Liquidity</button>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <div className="sv-cnt">
            <div className="sv-cnt-header">
              <h1 className="sv-cnt-header-title">Swap</h1>
              <p className="sv-cnt-header-para">Trade Tokens in an instant</p>
            </div>
            <div className="sv-cnt-body mt-3">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  let tokenAmount;
                  tokenAmount = this.input.value;
                  this.props.sellTokens(tokenAmount);
                }}
              >
                <div className="d-block mt-3">
                  <h2 className="sv-cnt-body-title">Speciex</h2>
                  <div className="select-box">
                    <div className="select-box__current">
                      <div className="select-box__value">
                        <input className="form-control form-control-lg" id='inputID' type="number" placeholder="0" style={{ background: ' transparent' }}
                          onChange={busdCalculation}
                          ref={(input) => {
                            this.input = input;
                          }} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center my-3">
                  <Link className="mb-2 mt-3" to="/" ><img className="drop-arrow" src="image/Icon-3.png" alt="Arrow Icon" /></Link>
                </div>
                <h2 className="sv-cnt-body-title">BUSD</h2>
                <div className="d-block">
                  <div className="select-box">
                    <div className="select-box__current" >
                      <div className="select-box__value">
                        <input className="form-control form-control-lg" id='inputID' type="number" style={{ background: ' transparent' }}
                          value={this.state.output}
                          placeholder="0"
                          disabled />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                  <button className="btn btn-primary-white --border --width" style={{ backgroundColor: 'white' }}>Unlock Wallet</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SellForm;
