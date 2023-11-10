import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//images
import backgroundImage from '../images/landing_page/backgroun_image.jpg'
import googleIcon from '../images/landing_page/logoGoogle.png'
// sign in social media
import GoogleLogin from 'react-google-login';




function Landing_pages() {

    const navigate = useNavigate();

    //social media login functions
    const responseGoogle = (response: any) => {
        document.getElementById('googleButton')
        navigate("/")
        console.log('call google app')
        // console.log(response);
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
                            clientId="737300273344-r2l627q6l8t8r8hesttbvhv6njolt4ms.apps.googleusercontent.com"
                            render={renderProps => (
                                <>

                                    <button className='bg-black text-white py-2.5 px-3.5 w-36 mr-4'
                                        onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        <div className='flex items-center justify-between	'>
                                            <img className='w-3.5 mr-2' src={googleIcon} />
                                            <p>Google Log In</p>
                                        </div>
                                    </button>
                                </>
                            )}
                            buttonText="Login" 
                            type='button'                           
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}                            
                            cookiePolicy={'single_host_origin'}
                        />

                        <button className='bg-black text-white py-2.5 px-3.5 w-36'>
                            Log In
                        </button>
                    </div>


                </div>

            </div>

        </div>

    )
}

export default Landing_pages;