import React from 'react';

function navbar() {
    return (
      
        <div className='h-16 w-full flex justify-start sm:flex sm:justify-start items-center  abosulte top-0'>
            <button className='relative left-6 w-20	 py-1.5 px-1.5  sm:py-2.5 sm:px-3.5 sm:w-32 rounded-xl text-primary-font-color bg-secondary-color'>Log In</button>
            {/* <img className='w-8 h-8' src='https://app-cdn.acelitchi.com/prod/app/10/2/3979475375754501350.webp' /> */}
        </div>
    );
}

export default navbar;