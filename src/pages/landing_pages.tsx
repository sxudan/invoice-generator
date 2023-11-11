import React from 'react';
import { Link } from "react-router-dom";
//images
import backgroundImage from '../images/landing_page/backgroun_image.jpg'
import googleIcon from '../images/landing_page/logoGoogle.png'
// sign in social media
import GoogleLogin from 'react-google-login';
import '../css/main.css'


function landing_pages() {

    //social media login functions
    const responseGoogle = (response: any) => {
        document.getElementById('googleButton')

        console.log(response);
    }
   

    return (

        <div className='tw-sm:absolute tw-top-0 tw-z-1 tw-h-fit	'>
            <div className='tw-relative tw-flex-col tw-sm:flex tw-sm:flex-row-reverse'>

                <img className='tw-relative tw-sm:top-24 tw-md:top-12 w-60 tw-m-auto tw-sm:w-1/2  tw-sm:m-0' src={backgroundImage} />

                <div className='tw-relative tw-flex-col tw-text-center tw-sm:text-left tw-sm:top-24 tw-md:top-40 tw-sm:left-6'>

                    <h1 className='tw-font-title-font tw-text-4xl tw-md:text-6xl tw-text-secondary-color'>Get Your Invoice Templates</h1>
                    <br />

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia vitae soluta eveniet amet molestias .</p>
                    <br />

                    <Link to='/generate-invoice'>
                        <button className='tw-py-2.5 tw-px-3.5 tw-w-48 tw-rounded-xl tw-bg-secondary-color tw-text-primary-font-color'>Create Invoice Now</button>
                    </Link>
                    <br />
                    <br />

                    {/* social media buttons */}
                    <div className='tw-flex tw-justify-center tw-sm:flex tw-sm:justify-start'>
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            render={renderProps => (
                                <>

                                    <button className='tw-bg-black tw-text-white tw-py-2.5 tw-px-3.5 tw-w-36 tw-mr-4'
                                        onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        <div className='tw-flex tw-items-center tw-justify-between	'>
                                            <img className='tw-w-3.5 tw-mr-2' src={googleIcon} />
                                            <p>Google Log In</p>
                                        </div>
                                    </button>
                                </>
                            )}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />

                       <button className='tw-bg-black tw-text-white tw-py-2.5 tw-px-3.5 tw-w-36'>
                                Log In
                       </button>
                    </div>


                </div>

            </div>

        </div>

    )
}

export default landing_pages;