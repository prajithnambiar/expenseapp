import './ExpenseFilter.css';
import React from 'react';


const ExpenseFilter = (props)=>{
    const filterchange = (event)=>{
        props.onchangefilter(event.target.value)

    }


    return(
        <div className='expense-filter'>
            <div className='expensefilter-control'>
                <label>Filter by Year</label>
                <select value={props.selectedyear} onChange={filterchange}>
                    <option value= '2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
        
                </select>
            </div>
        </div>

    )
}

export default ExpenseFilter;