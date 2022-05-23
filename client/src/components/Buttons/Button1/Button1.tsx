import { motion } from "framer-motion"
import './Button1.css'
import React from 'react';


type ButtonProps = {
    name: string,
    icon: string,
    buttonColor: string,
    textColor: string,
    top: string,
    left: string,
    fontWeight: string,
    rippleColor: string
}

const styles = {

}
const Button1 = ({name, icon, buttonColor, textColor, top, left, fontWeight, rippleColor}: ButtonProps) => {
    return (
        <button className="button_1" style={ { "--text-color": `${textColor}`, '--button-color':`${buttonColor}`, '--weight':`${fontWeight}`, '--ripple-color':`${rippleColor}` } as React.CSSProperties}>
            <span style={{backgroundImage: `url(${icon})`, backgroundRepeat: 'no-repeat', top:top, left:left}} className="button_1_icon"></span>
            {name}
        </button>
    )
}

export default Button1
