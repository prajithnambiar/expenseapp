
import React, { useState} from "react";



import Expenses from './components/Expenseapp/Expenses';
import Newexpense from "./components/Newexpense/Newexpense";
let Dummyexpense = [
  {
    id :'e1',
    clsdate: new Date(2019, 0, 1),
    clsdes: "car insurance Renew",
    clsprice: 60000,
  },
  {
    id : 'e2',
    clsdate: new Date(2020, 1, 2),
    clsdes: "car service",
    clsprice: 5000,
  },
  {
    id :'e3',
    clsdate: new Date(2021, 2, 8),
    clsdes: "food",
    clsprice: 6000,
  },
  {
    id : 'e4',
    clsdate: new Date(2022, 3, 2),
    clsdes: "house rent",
    clsprice: 5000,
  },
 
];


 

const App = () => {
  
   
    const [expense, Setexpense] = useState(Dummyexpense);

    const mainparentexpense = (receiveparentdata)=>{
      

      Setexpense(expense1 =>{
        return[receiveparentdata, ...expense1];
      });
      console.log(receiveparentdata)
    
    }
    return (
      <div>
        <Newexpense refparentfunc1 = {mainparentexpense}></Newexpense>
       <Expenses items = {expense}> </Expenses>
      </div>
    );
  }


export default App;
