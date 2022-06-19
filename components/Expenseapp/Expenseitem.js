import "./Expenseitem.css";

import Exdate from "./Expensedate";
import Card from "../UI/Card";
import React, {useState} from 'react';


//NOW WE CAN USE THESE CONST VALUES INSIDE OUR JSX CODE WITH THE HELP OF CURLY BRACKETS -

const Expenselist = (props) => {

  const[anything , updateanything] =  useState('');

  const changehandler = (event)=>{
    updateanything(event.target.value)
  }

  const[title, updatetitle] =  useState(props.description);


  const clickHandler = ()=>{
   updatetitle(anything) 

  }
 
 
  return (
    <Card className="expense-item">
      <Exdate date= {props.date}></Exdate>
      
      <div className="expense-item__description">
        <h1>{props.description}</h1>
      </div>

      <div className="expense-item__price">Rs. {props.amount}</div>
      <input type='text' value={anything} onChange={changehandler}></input>
      <button onClick={clickHandler}>Change Text</button>
    </Card>
  );

  }
export default Expenselist;
