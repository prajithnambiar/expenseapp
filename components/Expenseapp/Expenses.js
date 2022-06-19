import './Expenses.css';
import Expenselist from './Expenseitem';
import Card from '../UI/Card';
import React  from 'react';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const [filteryear, setfilter] = useState('2020')

  const expensefilterfunc = (receivefilter)=>{
    setfilter(receivefilter)
    // console.log(receivefilter)

  }


    return(
      <div>
        <Card className="expenses">
          <ExpenseFilter selectedyear = {filteryear} onchangefilter = {expensefilterfunc}></ExpenseFilter>

          {
            props.items.map(
              
              expense =>
                <Expenselist
                key = {expense.id}
                date={expense.clsdate}
                description={expense.clsdes}
                amount={expense.clsprice}
              ></Expenselist>

              
            )
          }

        
        {/* <Expenselist
        date={props.items[0].clsdate}
        description={props.items[0].clsdes}
        amount={props.items[0].clsprice}
      ></Expenselist>
      <Expenselist
        date={props.items[1].clsdate}
        description={props.items[1].clsdes}
        amount={props.items[1].clsprice}
      ></Expenselist>
      <Expenselist
        date={props.items[2].clsdate}
        description={props.items[2].clsdes}
        amount={props.items[2].clsprice}
      ></Expenselist>
      <Expenselist
        date={props.items[3].clsdate}
        description={props.items[3].clsdes}
        amount={props.items[3].clsprice}
      // ></Expenselist> */}
      </Card>
      </div>
    )

}
export default Expenses;