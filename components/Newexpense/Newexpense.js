import "./Newexpense.css";
import Expenseform from "./Expenseform";

const Newexpense = (props)=>{

    const parentexpense = (receivexpensedata)=>{

        const receivexpensedata1 = {
            ...receivexpensedata,
            id : Math.random().toString()
        }

        console.log(receivexpensedata1);

        props.refparentfunc1(receivexpensedata1);
    }

   
    

    return(
        <div className="new-expense">
            <Expenseform refparentfunc = {parentexpense}></Expenseform>

        </div>
    )

}
export default Newexpense;