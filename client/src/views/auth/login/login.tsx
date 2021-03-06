import React from 'react'
import {useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion';
import { login_submit } from '../../../util/auth/submit'
import { apple_icon, fb_icon, google_icon } from './public/images'
import login_provider from '../../../util/auth/provider'
import verify from '../../../util/auth/verify'
import './login.css'

const Login = () => {
    let navigate = useNavigate()

    verify().then(i=> {
        navigate("/")
    }).catch(e => {
        console.error(e)
    })


    const Submit = async (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();

        let emal : string = (document.getElementById('email') as HTMLInputElement).value;
        let pass : string = (document.getElementById('password') as HTMLInputElement).value;

        // Login to firebase server
        login_submit(emal, pass)
    }

    return (
        <motion.div
                initial={{opacity:0}}
                animate={{opacity:'100%'}}
                exit={{opacity:0, transition:{duration:1}}}
                transition={{duration:1, ease: "easeOut"}}
            >
            <div className="rectangle"></div>
            <img className="computer" alt="computer" src={process.env.PUBLIC_URL + '/computer.png'} />
            <form className="form" onSubmit={Submit}>
                <p className="highlighted-text" style={{textAlign:'center'}}><strong>Welcome Back!</strong></p><br/>
                <p className="text"> Email: </p>
                <input id="email" className="inp" type="email" required/>
                <p className="text"> Password: </p>
                <input id="password" className="inp" type="password" required/><br/> <br/>
                <input className="sub_but" value="Login" type="submit"/><br/><br/><br/>
                <p style={{textAlign:'center'}}><span className="text">Don't have an account?</span> <span onClick={() => {navigate("/register")}} style={{cursor:'pointer'}}  className="highlighted-text">Register</span></p>
                <div className="third-party-auth">
                    <img src={fb_icon} onClick={()=>login_provider("facebook")}/>
                    <img src={apple_icon} onClick={()=>login_provider("apple")}/>
                    <img src={google_icon} onClick={()=>login_provider("google")}/>
                </div>
            </form>
            <div className="rectangle-3"></div>
            <div className="rectangle-2"></div>
        </motion.div>
    )
}

export default Login
