import React, {useState} from 'react'
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import './LongIconButton.css'

type LongIconButtonProps = {
    placeholder: string,
    icon_start: string,
    icon_end: string,
    buttonColor: string,
    textColor: string,
    paddingLeft: string
}

const LongIconButton = ({placeholder, icon_start, icon_end, buttonColor, textColor, paddingLeft} : LongIconButtonProps) => {

    const [show, set_show] = useState(true)

    const changed = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value) set_show(false)
        else set_show(true)
    }

    return (
        <div style={{display: 'inline', position: 'absolute', width: '100%', paddingLeft: paddingLeft}}>
            <AnimatePresence exitBeforeEnter>
            {show && 
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0, transition:{duration:0.5}}}
                    transition={{ duration: 0.5 }}
                    style={{backgroundImage: `url(${icon_start})`, backgroundRepeat: 'no-repeat', marginLeft: paddingLeft}} className="log_icon_button_start">
                </motion.div>
                }
            </AnimatePresence>
            <input type="text" placeholder={placeholder} style={{color: textColor, backgroundColor: buttonColor, /*textIndent:show?"2rem":"0rem"*/}} className="long_icon_button" onChange={changed}/>
            <AnimatePresence exitBeforeEnter>
            {show && 
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    transition={{ duration: 0.5, transition:{duration:0.5}}}
                    style={{backgroundImage: `url(${icon_end})`, backgroundRepeat: 'no-repeat', marginLeft: paddingLeft}} className="log_icon_button_end">
                </motion.div>}
                </AnimatePresence>
        </div>
    )
}

export default LongIconButton
