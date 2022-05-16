import React from 'react'
import {useNavigate} from 'react-router-dom'
import './login.css'


const Login = () => {
    let navigate = useNavigate()


    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();

        let emal : string = (document.getElementById('email') as HTMLInputElement).value;
        let pass : string = (document.getElementById('password') as HTMLInputElement).value;

         // Send a post request to server
         await fetch('http://localhost:5002/api/auth/login', {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'email':    emal,
                'password': pass,
            })
        }).then(res => {
            res.json().then(i => {
                if(i.status === 200) {
                    navigate("/")
                }
            }).catch(e=> {
                alert(e)
                window.location.reload();
            })
        }).catch(err => {
            alert(err)
            window.location.reload();
        });
    }

    return (
        <div>
            <div className="rectangle"></div>
            <img className="computer" alt="computer" src={process.env.PUBLIC_URL + '/computer.png'} />
            <form className="form" onSubmit={submit}>
                <p className="highlighted-text" style={{textAlign:'center'}}><strong>Welcome Back!</strong></p><br/>
                <p className="text"> Email: </p>
                <input id="email" className="inp" type="email" required/>
                <p className="text"> Password: </p>
                <input id="password" className="inp" type="password" required/><br/> <br/>
                <input className="sub_but" value="Login" type="submit"/><br/><br/><br/>
                <p style={{textAlign:'center'}}><span className="text">Don't have an account?</span> <span onClick={() => {navigate("/register")}} style={{cursor:'pointer'}}  className="highlighted-text">Register</span></p>
            </form>
            <div className="rectangle-3"></div>
            <div className="rectangle-2"></div>
        </div>
    )
}

export default Login
