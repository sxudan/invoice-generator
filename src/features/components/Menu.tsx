import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../../images/landing_page/menuIcon.png'
import closeIcon from '../../images/landing_page/close-button.png'
import logoInvoice from '../../images/landing_page/logoInvoice.png'


function Menu() {


    const [show, setShow] = useState(true)


    return (
        <>
            {!show ?
                <div className='w-full fixed top-0  mb-2.5 flex items-center justify-between h-fit bg-secondary-color'>

                    <button  onClick={() => setShow(true)}>
                        <img className=' h-14' src={menuIcon} />
                    </button>
                    
                    <Link to='/'>
                        <img className='  h-14' src={logoInvoice} />
                    </Link>
                </div> : ""
            }

            {show ? <div className='fixed top-0 z-[2] sm: w-48 h-full  bg-secondary-color'>

                <div className='flex justify-end mr-2 mt-2 items-center'>
                    {/* <img className='  h-14 sm:h-14' src={logoInvoice} /> */}
                    <button onClick={() => setShow(false)}>
                        <img className='h-8' src={closeIcon} />
                    </button>

                </div>


                <ul className='text-white w-4/5	 ml-6 flex flex-col'>
                    <h1 className='text-white text-left w-fit text-2xl'>Templates</h1>

                    <Link to='/generate-invoice'>
                        <li>Invoice</li>
                    </Link>

                    <Link to='/generate-purchase-order'>
                        <li><button onClick={() => console.log('testing')}>Purchase Order</button></li>
                    </Link>

                    <Link to=''>
                        <li>Resume CV</li>
                    </Link>
                </ul>
            </div> : ""}

        </>
    );
}

export default Menu;