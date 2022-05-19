import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {register_submit} from '../util/submit'
import { motion } from 'framer-motion';
import verify from '../util/verify'
import './register.css'


const Register = () => {

    const [input, setInput] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    let navigate = useNavigate()

    verify().then(i=> {
        navigate("/")
    }).catch(e => {
        console.error(e)
    })

    const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
        validateInput(e);
      }

    const validateInput = (e: React.FormEvent<HTMLInputElement>) => {
        let { name, value } = e.currentTarget;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
          switch (name) {

            case "password":
                if (!value) {
                  stateObj[name] = "Please enter Password.";
                } else if (input.confirmPassword && value !== input.confirmPassword) {
                  stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                } else {
                  stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                }
                break;

            case "confirmPassword":
              if (!value) {
                stateObj[name] = "Please enter Confirm Password.";
              } else if (input.password && value !== input.password) {
                stateObj[name] = "Password and Confirm Password does not match.";
              }
              break;
    
            default:
              break;
          }
    
          return stateObj;
        });
      }

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {

        // Preventing the page from reloading
        event.preventDefault();

        // must confirm correctly
        if(error.confirmPassword) {
            alert(error.confirmPassword)
            return
        }

        let full : string = (document.getElementById('full_name') as HTMLInputElement).value;
        let user : string = (document.getElementById('username') as HTMLInputElement).value;
        let emal : string = (document.getElementById('email') as HTMLInputElement).value;
        let pass : string = (document.getElementById('password') as HTMLInputElement).value;
        let conf : string = (document.getElementById('confirm') as HTMLInputElement).value;

        // Register to firebase server
        register_submit(full, user, emal, pass, conf)
    }

    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:'100%'}}
            exit={{opacity:0, transition:{duration:1}}}
            transition={{duration:1, ease: "easeOut"}}
        >
            <div className="rectangle5"></div>
            <div className="rectangle4"></div>
            <img className="desktop" alt="desktop" src={process.env.PUBLIC_URL + '/desktop.png'} />
            <form className="form_register" onSubmit={submit}>
                <p className="highlighted-text" style={{textAlign:'center'}}><strong>Join Our Community!</strong></p><br/>
                <p className="text"> Fullname: </p>
                <input className="inp" type="text" id="full_name" required/>
                <p className="text" id=""> Username: </p>
                <input className="inp" type="text" id="username" required/>
                <p className="text"> Email: </p>
                <input className="inp" type="email" id="email" required/>
                <p className="text"> Password: </p>
                <input name="password" id="password" value={input.password} onChange={onInputChange} onBlur={validateInput} className="inp" type="password" required/>
                <p className="text"> Confirm Password: </p>
                <input name="confirmPassword" id="confirm" className="inp" value={input.confirmPassword} onChange={onInputChange} onBlur={validateInput} type="password" required/><br/> <br/>
                {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                <input className="sub_but" value="Sign Up" type="submit"/><br/><br/>
                <p style={{textAlign:'center'}}><span className="text">Yes i have an account?</span> <span onClick={() => {navigate("/login")}} style={{cursor:'pointer'}}  className="highlighted-text">Login</span></p>
            </form>
        </motion.div>
    )
}

export default Register
