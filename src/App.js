import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';

// Add code to import the other components here under
import { AppProvider } from './context/AppContext';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ChnageCurrency from './components/ChangeCurrency';
import AllocationForm from './components/AllocationForm';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    {
                        // Budget component
                        <div className='col-sm col-md-3'>
                            <Budget />
                        </div>
                    }

                    {
                        //Remaining component
                        <div className='col-sm col-md-3'>
                            <Remaining />
                        </div>
                    }

                    {
                        <div className='col-sm col-md-3'>
                            <ExpenseTotal />
                        </div>
                    }

{
                        <div className='col-sm col-md-3'>
                            <ChnageCurrency />
                        </div>
                    }

                    {
                        <div className='col-sm col-md-12'>
                            <h2>Allocation</h2>
                            <ExpenseList />
                        </div>
                    }



                    {
                        <div className='col-sm col-md-12'>
                            <h2>Change allocation</h2>
                            <AllocationForm />
                        </div>
                    }

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
