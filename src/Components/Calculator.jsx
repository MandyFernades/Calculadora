import React, {useState} from "react";
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator(){
   const[num, setNum]= useState(0);
   //realizar o calculo
   const[oldnum, setOldNum]= useState(0);
   const[operator, setOperator]= useState();

   function inputNum(e){
    var input=e.target.value;
    if(num===0){  //tira o 0 da frente
        setNum(input);
    }else{
        setNum(num + input);
    }
  

   }
   function clear(e){ //limpa a caixa de texto
    setNum(0)
   }

   function porcentage(){ //realiza as porcentagens
    setNum(num/100)
   }

   function changeSing(){ //mudar o sinal
    if(num>0){
        setNum(-num)

    }else{
        setNum(Math.abs(num))
    }
   }

   function operatorHandler(e){ //irá realizar os calculos
    var operatorInput=e.target.value
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
   }

   function calculate(){ //realizando os calculos
    if(operator==="/"){
        setNum(oldnum/num);
    }else if (operator=== "X") {
        setNum(oldnum * num);
    }else if (operator=== "-") {
        setNum(oldnum - num);
    }else if (operator=== "+") {
        setNum(parseFloat(oldnum) + parseFloat(num));
    }

    console.log("calculou!")
    console.log(oldnum)
    console.log(num)
    console.log(operator)
   }



    return(
        <div>
        <Box m={2}/>
        <Container maxWidth="xs" > 
        <div className="wrapper">
            <h1 className="result">{num}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={changeSing}>+/-</button>
            <button onClick={porcentage}>%</button>
            <button className="orange" onClick={operatorHandler} value="/">/</button> 
            <button className="gray" onClick={inputNum} value={7}>7</button>
            <button className="gray" onClick={inputNum} value={8}>8</button>
            <button className="gray" onClick={inputNum} value={9}>9</button>
            <button className="orange" onClick={operatorHandler}  value="X">X</button>
            <button className="gray" onClick={inputNum} value={4}>4</button>
            <button className="gray" onClick={inputNum} value={5}>5</button>
            <button className="gray" onClick={inputNum} value={6}>6</button>
            <button className="orange" onClick={operatorHandler} value="-">-</button>
            <button className="gray" onClick={inputNum} value={1}>1</button>
            <button className="gray" onClick={inputNum} value={2}>2</button>
            <button className="gray" onClick={inputNum} value={3}>3</button>
            <button className="orange" onClick={operatorHandler}value="+" >+</button>
            <button className="gray" onClick={inputNum} value={0}>0</button>
            <button className="gray" onClick={inputNum} value={"."}>,</button>
            <button className="orange" onClick={calculate}>=</button>
        </div>
        </Container>
        </div>
    )
}