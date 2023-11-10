import React from 'react';
import logoInvoice from '../../images/landing_page/logoInvoice.png'


function navbar() {
    return (
      
        <div className='h-16  w-full flex justify-start sm:flex sm:justify-start items-center top-0 mb-16'>
            <div className='relative left-6 w-20 py-1.5 px-1.5  sm:py-2.5 sm:px-3.5 sm:w-32 rounded-br-xl rounded-bl-xl mb-2 text-primary-font-color bg-secondary-color'><img className='z-2 m-auto h-14 sm:h-auto sm:mt-10' src={logoInvoice}/></div>
        </div>
    );
}

export default navbar;