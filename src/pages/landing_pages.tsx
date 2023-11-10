import React from 'react';
import { Link } from "react-router-dom";
import backgroundImage from '../images/landing_page/backgroun_image.jpg'


function landing_pages() {
    return (

        <div className='sm:absolute top-0 z-1 h-fit	'>
            <div className='relative flex-col sm:flex sm:flex-row-reverse'>
                <img className='w-60 m-auto sm:w-1/2  sm:m-0' src={backgroundImage} />
                <div className='relative flex-col text-center sm:text-left sm:top-24 md:top-40 sm:left-6'>
                    <h1 className='font-title-font text-4xl	 md:text-6xl text-secondary-color'>Get Your Invoice Templates</h1>
                    <br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia vitae soluta eveniet amet molestias .</p>
                    <br />
                    <Link to='/generate-invoice'>
                    <button className='py-2.5 px-3.5 w-48 rounded-xl bg-secondary-color text-primary-font-color'>Create Invoice Now</button>
                    </Link>
                    <br />
                    <br/>
                    <div className='flex justify-center sm:flex sm:justify-start'>
                        <button className='bg-black text-white py-2.5 px-3.5 w-32 mr-4'>Google Play</button>
                        <button className='bg-black text-white py-2.5 px-3.5 w-32'>App Store</button>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default landing_pages;