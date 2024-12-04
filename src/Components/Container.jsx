import React, { useState } from 'react'
import { CalcDiv, ContainerDiv, Controlbtn, DisplayDiv, Gitlogo, LowerDiv, UpperDiv } from '../Styles/container'

const Container = () => {
    const [calvalue,setcalvalue]=useState("0");
    const [prevstate,setprestate]=useState("");
    const [toggle,settoggle]=useState('-');
    const handleClick=(e)=>{
        console.log(e.target.value);
        const tempvalue=e.target.value;
        if(calvalue==="Error" ||calvalue==="Infinity"){
            setcalvalue('');
        }
        if(!isNaN(parseInt(tempvalue))){
            console.log("number hai"+tempvalue);
            if(calvalue==="0"){
                setcalvalue((pre)=>tempvalue);
            }else{
                setcalvalue((pre)=>pre+tempvalue);
            }
        }else{
            console.log("naumber nai hai");
            if(tempvalue==="%"){
                if(calvalue==='0'){}else{
                    setcalvalue(pre=>pre/100);
                }
            }
            if(tempvalue==="+/-"){
                console.log(tempvalue);
                if(calvalue==='0'){}else{

                    console.log("andar");
                    if(toggle==='-'){
                        setcalvalue(pre=>toggle+pre);
                        settoggle('');
                    }else{
                        setcalvalue(pre=>pre.slice(1));
                        settoggle('-');
                    }
                }
                
            }
            if(e.target.value=="C"){
                setcalvalue('0');
                setprestate('');
                settoggle('-');
            }else if (tempvalue === "=") {
                // Evaluate the expression
                try {
                    const result = eval(calvalue);
                    // Check if the result is a decimal number
                    setprestate(calvalue);
                    setcalvalue(
                      Number.isInteger(result) ? result.toString() : result.toFixed(2).toString()
                    ); // Using eval for simplicity (use with caution)
                } catch (error) {
                  setcalvalue("Error");
                }
            }else if(tempvalue === "←") {
                setcalvalue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
              }else {
                // Handle operators (+, -, *, /)
                if (["+", "-", "*", "/","."].includes(tempvalue)) {
                    if(tempvalue==="."){
                        if (calvalue === "0") {
                            setcalvalue("0."); // Add decimal after initial zero
                          }else{

                              const lastnum=calvalue.split(/[\+\-\*\/]/).pop();
                              if(!lastnum.includes(".")){
                                  setcalvalue((prev) => prev + tempvalue);
                                }
                            }
                    }else{

                        if (!["+", "-", "*", "/"].includes(calvalue.slice(-1))) {
                            setcalvalue((prev) => prev + tempvalue);
                        }
                    }
                }
              }

        }

    }
  return (
    <>
        <ContainerDiv>
            <CalcDiv>
                <UpperDiv>
                    <DisplayDiv className='current'>{prevstate}</DisplayDiv>
                    <DisplayDiv className='result'>{calvalue}</DisplayDiv>
                </UpperDiv>
                <LowerDiv>
                    <Controlbtn bg="#ccc" hoverbg="#eee" value="C" onClick={handleClick}>C</Controlbtn>
                    <Controlbtn bg="#ccc" hoverbg="#eee" value="+/-" onClick={handleClick}>+/-</Controlbtn>
                    <Controlbtn bg="#ccc" hoverbg="#eee" value="%" onClick={handleClick}>%</Controlbtn>
                    <Controlbtn bg="#FF915F" hoverbg="#ff915f" value="/" onClick={handleClick}>/</Controlbtn>
                    <Controlbtn bg="" hoverbg="" value="7" onClick={handleClick}>7</Controlbtn>
                    <Controlbtn bg="" hoverbg="" value="8" onClick={handleClick}>8</Controlbtn>
                    <Controlbtn bg="" hoverbg="" value="9" onClick={handleClick}>9</Controlbtn>
                    <Controlbtn bg="#FF915F" hoverbg="#ff915f" value="*" onClick={handleClick}>x</Controlbtn>
                    <Controlbtn bg="" hoverbg="" value="4" onClick={handleClick}>4</Controlbtn>
                    <Controlbtn bg="" hoverbg="" value="5" onClick={handleClick}>5</Controlbtn>
                    <Controlbtn bg="" hoverbg="" value="6" onClick={handleClick}>6</Controlbtn>
                    <Controlbtn bg="#FF915F" hoverbg="#ff915f" value="-" onClick={handleClick}>-</Controlbtn>
                    <Controlbtn bg="" hoverbg="" value="3" onClick={handleClick}>3</Controlbtn>
                    <Controlbtn bg="" hoverbg="" value="2" onClick={handleClick}>2</Controlbtn>
                    <Controlbtn bg="" hoverbg="" value="1" onClick={handleClick}>1</Controlbtn>
                    <Controlbtn bg="#FF915F" hoverbg="#ff915f" value="+" onClick={handleClick}>+</Controlbtn>
                    <Controlbtn bg="" hoverbg="" value="0" onClick={handleClick}>0</Controlbtn>
                    <Controlbtn bg="" hoverbg="" value="." onClick={handleClick}>.</Controlbtn>
                    <Controlbtn bg="" hoverbg="" value="&#8592;" onClick={handleClick}>&#8592;</Controlbtn>
                    <Controlbtn bg="#ff5f6d" hoverbg="#ff5f6d" value="=" onClick={handleClick}>=</Controlbtn>
    
                </LowerDiv>
            </CalcDiv>
            <a href='https://github.com/arb-108?tab=repositories'><Gitlogo></Gitlogo></a>
        </ContainerDiv>
    </>
  )
}

export default Container