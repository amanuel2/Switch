import { motion } from "framer-motion"
import './Button1.css'

type ButtonProps = {
    name: string,
    icon: string,
    buttonColor: string,
    textColor: string,
    top: string,
    left: string,
    fontWeight: string
}

const Button1 = ({name, icon, buttonColor, textColor, top, left, fontWeight}: ButtonProps) => {
    return (
        <button className="button_1" style={{color: textColor, backgroundColor: buttonColor, fontWeight: fontWeight}}>
            <span style={{backgroundImage: `url(${icon})`, backgroundRepeat: 'no-repeat', top:top, left:left}} className="button_1_icon"></span>
            {name}
        </button>
    )
}

export default Button1
