import React from 'react';
import { Link } from "react-router-dom";
//images
import backgroundImage from '../images/landing_page/backgroun_image.jpg'
import googleIcon from '../images/landing_page/logoGoogle.png'
import facebookLogo from '../images/landing_page/FacebookLogo.png'


// sign in social media
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'






function landing_pages() {

    //social media login functions
    const responseGoogle = (response: any) => {
        document.getElementById('googleButton')

        console.log(response);
    }

    const responseFacebook = (response: any) => {
        console.log(response);
    }


    return (

        <div className='sm:absolute top-0 z-1 h-fit	'>
            <div className='relative flex-col sm:flex sm:flex-row-reverse'>

                <img className='relative sm:top-24 md:top-12 w-60 m-auto sm:w-1/2  sm:m-0' src={backgroundImage} />

                <div className='relative flex-col text-center sm:text-left sm:top-24 md:top-40 sm:left-6'>

                    <h1 className='font-title-font text-4xl	 md:text-6xl text-secondary-color'>Get Your Invoice Templates</h1>
                    <br />

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia vitae soluta eveniet amet molestias .</p>
                    <br />

                    <Link to='/generate-invoice'>
                        <button className='py-2.5 px-3.5 w-48 rounded-xl bg-secondary-color text-primary-font-color'>Create Invoice Now</button>
                    </Link>
                    <br />
                    <br />

                    {/* social media buttons */}
                    <div className='flex justify-center sm:flex sm:justify-start'>
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            render={renderProps => (
                                <>

                                    <button className='bg-black text-white py-2.5 px-3.5 w-auto mr-4'
                                        onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        <div className='flex items-center justify-between	'>
                                            <img className='w-3.5 mr-2' src={googleIcon} />
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

                        <FacebookLogin
                            appId="1088597931155576"
                            autoLoad
                            callback={responseFacebook}
                            render={renderProps => (
                                <button className='bg-black text-white py-2.5 px-3.5 w-32 mr-4 w-auto'
                                    onClick={renderProps.onClick}>
                                    <div className='flex items-center justify-between	'>
                                        <img className='w-3.5 mr-2' src={facebookLogo} />
                                        <p>Facebook Log In</p>
                                    </div>
                                </button>
                            )}
                        />
                    </div>


                </div>

            </div>

        </div>

    )
}

export default landing_pages;