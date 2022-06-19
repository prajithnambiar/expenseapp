import "./Expenseform.css";
import React, {useState} from "react";

const Expenseform = (props) =>{

    const [chtxt, updtxt]=  useState('');

    const [chdate, updte]=  useState('');

    const [chprice, upprice]=  useState('');
    

    const intitle = (event)=>{
        updtxt(event.target.value)

    };

    const indate = (event)=>{
        updte(event.target.value)
    }

    const inprice = (event)=>{
        upprice(event.target.value)
    }

    const submitHandler  = (event)=>{
        event.preventDefault();

        const expenseData=
         {
            title1 : chtxt,
            date1 : new Date(chdate),
            price1 : chprice
        }

        props.refparentfunc(expenseData);

        console.log(expenseData)
        //we are doing this to set the fields to blank after clicking on the add expense button
        //concept name = 2 way binding
        updtxt('');
        updte('');
        upprice('');

    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label> <strong>Add title</strong> </label>
                    <input type='text' value={chtxt} onChange={intitle}></input>
                </div>
                <div className="new-expense__controls">
                    <label> <strong>Add date</strong></label>
                    <input type= 'date' value={chdate} min= '2019-01-01' max='2022-12-31' onChange={indate}></input>
                </div>
                <div className="new-expense__controls">
                    <label> <strong>Add price</strong></label>
                    <input type= 'number' min='01' value={chprice} step='01'onChange={inprice}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type= 'submit'>Add expense</button>
            </div>

        </form>
    )
}

export default Expenseform;