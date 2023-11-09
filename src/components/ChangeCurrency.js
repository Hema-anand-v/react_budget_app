import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
        console.log(value + "changed");
    }
    return (<div className='alert alert-success'> Currency Change {
        <select name="currency" id="currency" onChange={event => changeCurrency(event.target.value)}>
            <option value="£">Uk(£)</option>
            <option value="₹">India(₹)</option>
            <option value="€">Europe(€)</option>
            <option value="CAD">Canada(CAD)</option>
        </select>
    }
    </div>
    );
};
export default Budget;