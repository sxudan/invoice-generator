import React from 'react';
import { Link } from 'react-router-dom';
import logoInvoice from '../../images/landing_page/logoInvoice.png'

import { useNavigate } from "react-router-dom";



function Menu() {

    const navigate = useNavigate();

    console.log('menu')

    const testing = () => {
        console.log('testing button')
    }

    return (
        <div className='fixed top-0  w-48 h-full  bg-secondary-color'>

            <div className='w-20 py-1.5 px-1.5  sm:py-2.5 sm:px-2.5 sm:w-24 rounded-br-xl rounded-bl-xl mb-2 text-primary-font-color bg-secondary-color'>
                <img className='z-2  h-14 sm:h-14' src={logoInvoice} />
            </div>


            <ul className='text-white w-4/5	 ml-6 flex flex-col'>
                <h1 className='text-white text-left w-fit text-2xl'>Templates</h1>

                <Link to='/generate-invoice'>
                    <li>Invoice</li>
                </Link>

                <Link to='/generate-purchase-order'>
                    <li>Purchase Order</li>
                </Link>

                <Link to=''>
                    <li>Resume CV</li>
                </Link>
            </ul>
        </div>
    );
}

export default Menu;