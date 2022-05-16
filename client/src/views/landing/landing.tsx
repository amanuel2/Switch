import React from 'react'
import './landing.css'

const Landing = () => {
    return (
        <div>
            <div className="rectangle"></div>
            <img className="computer" src={process.env.PUBLIC_URL + '/computer.png'} />
            <form className="form">
                <p className="highlighted-text" style={{textAlign:'center'}}><strong>Welcome Back!</strong></p><br/>
                <p className="text"> Username: </p>
                <input className="inp" type="text"/>
                <p className="text"> Password: </p>
                <input className="inp" type="password"/><br/> <br/>
                <input className="sub_but" value="Login" type="submit"/><br/><br/><br/>
                <p style={{textAlign:'center'}}><span className="text">Don't have an account?</span> <span className="highlighted-text">Register</span></p>
            </form>
            <div className="rectangle-3"></div>
            <div className="rectangle-2"></div>
        </div>
    )
}

export default Landing
