import { useState, useEffect } from 'react';
import './landing.css'
import { motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom'
import Button1 from '../../components/Button1/Button1'
import ListInactive from '../../components/List/ListInactive'
import StreamerCard from '../../components/Cards/StreamerCard'
import verify from '../auth/util/verify'
import getUserInfo from '../auth/util/info'
import {games_icon, champ_icon, chat_icon, music_icon, royale_icon, student_icon, nelson, streamer_1, streamer_2, streamer_3, profile_icon,creator_icon,friends_icon,star_icon,wallet_icon,settings_icon,help_icon,feedback_icon,login_icon,logout_icon} from './public/images' 
import SmallAvatar from '../../components/Avatar/SmallAvatar';
import ListMenuItems from '../../components/List/ListMenuItems'
import { logout_submit } from '../auth/util/submit'
import { AnimatePresence } from 'framer-motion';


const Landing = () => {

    const [is_auth, set_auth]  = useState(false);
    const [active, set_active] = useState({'space':false, 'games_button':false, 'menu_overlay':false})
    const [user, set_user]  = useState({'displayName': "", 'email':"", 'photoUrl':"", "uid":""})

    let navigate = useNavigate()

    type activeType = {
        space: boolean,
        games_button: boolean,
        menu_overlay: boolean
    }

    type userType = {
        displayName: string
        email: string
        photoURL: string
        uid: string
    }

    const active_default: activeType = {
        'space': false,
        'games_button': false,
        'menu_overlay': false
    }

    const check_auth = () => {
        verify().then(i=> {
            set_auth(true)
        }).catch(e => {
            set_auth(false)
        })
    }

    // const check_user = () => {
    //     getUserInfo().then(i=> {
    //         set_user({value:i})
    //     }).catch(e=> {
    //         set_user({})
    //     })
    // }

    const new_active = (item: string, act=false) => {
        for(const prop in active_default){
            if(String(prop) === item){
                set_active({...active, [item]: act})
            }
            else set_active({...active, [prop]: false})
        }
    }

    useEffect(() => {
        check_auth();
        // check_user();
    }, []);

    const empty = () => {}

        
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{ duration: 1 }}
            >
            {/* <h2>{user['photoURL']}</h2> */}
            <div className="rectangle1">
                <div className="polygon"></div>
                <img className="logo_dsh" onClick={()=>{new_active("space"); navigate("/")}} alt="logo_dsh" src={process.env.PUBLIC_URL + '/Logo_Dashboard.png'} />
                <div className="dash_group_1" onClick={()=>new_active("games_button",true)}><Button1 name="Games" icon={games_icon} textColor="#32126D" buttonColor="white" top="20%" left="11%"/></div>
                <div className="categories">
                    <ListInactive name="ESports" icon={champ_icon}/>
                    <ListInactive name="Music" icon={music_icon}/>
                    <ListInactive name="Learning" icon={student_icon}/>
                    <ListInactive name="Chatting" icon={chat_icon}/>
                    <ListInactive name="Battle Royale" icon={royale_icon}/>
                </div>
                <div className="line_landing"></div>
                <div className="streamer_cards">
                    <span onClick={()=>new_active("space")}><StreamerCard name="AndreiK"  pfp={streamer_1} views={876}  /></span>
                    <span onClick={()=>new_active("space")}><StreamerCard name="Symfuny"  pfp={streamer_2} views={4300} /></span>
                    <span onClick={()=>new_active("space")}><StreamerCard name="DeadKing" pfp={streamer_3} views={303}  /></span>
                </div>
            </div>
            <div className="rectangle2">
                {is_auth === true ? 
                    <div className="small_avatar_pfp" onClick={()=>active.menu_overlay?new_active("menu_overlay"):new_active("menu_overlay", true)}>
                        <SmallAvatar alt="user_pfp" src={nelson}/>
                    </div> : 
                    <div className="login_landing" onClick={()=>navigate("/login")}>
                        <Button1 name="Login" icon={login_icon} textColor="white" buttonColor="#49238d" top="25%" left="12%"/>
                    </div>
                }
            </div>
            <div className="rectangle3">
                <AnimatePresence>
                    {active.menu_overlay && (<motion.div key="box" className="rectangle6"
                            initial={{y:'50%', opacity:0, scale:0.5}}
                            animate={{y:0, opacity:1, scale: 1}}
                            exit={{y:'50%', opacity:0, transition:{duration: 0.1}}}
                            transition={{duration:0.2, ease: "easeOut"}}
                            >
                                <div className="menu_items_org">
                                <ListMenuItems 
                                    items={["Profile", "Dashboard", "Friends", "Subscriptions", "Wallet", "Settings", "Help", "Feedback", "Logout"]}
                                    icons={[profile_icon, creator_icon, friends_icon, star_icon, wallet_icon, settings_icon, help_icon, feedback_icon, logout_icon]}
                                    fns={[empty,empty,empty,empty,empty,empty,empty,empty,logout_submit]}
                                /></div>
                            </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default Landing
