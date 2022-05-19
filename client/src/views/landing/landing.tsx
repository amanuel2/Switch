import { useState, useEffect } from 'react';
import './landing.css'
import { motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom'
import Button1 from '../../components/Buttons/Button1/Button1'
import LongIconButton from '../../components/Buttons/LongIconButton/LongIconButton'
import StreamButton from '../../components/Buttons/StreamButton/StreamButton'
import ListInactive from '../../components/List/ListInactive'
import StreamerCard from '../../components/Cards/StreamerCard'
import verify from '../../util/auth/verify'
import getUserInfo from '../../util/auth/info'
import {games_icon, champ_icon, chat_icon, music_icon, royale_icon, student_icon, streamer_1, streamer_2, streamer_3, profile_icon,creator_icon,friends_icon,star_icon,wallet_icon,settings_icon,help_icon,feedback_icon,login_icon,logout_icon, search_icon,adjust_search_icon} from './public/images' 
import SmallAvatar from '../../components/Avatar/SmallAvatar';
import ListMenuItems from '../../components/List/ListMenuItems'
import { activeType } from '../../types/landing/index'
import { logout_submit } from '../../util/auth/submit'
import { AnimatePresence } from 'framer-motion'



const Landing = () => {

    const [is_auth, set_auth]  = useState(false);
    const [active, set_active] = useState({'space':false, 'games_button':false, 'menu_overlay':false})
    const [user, set_user]     = useState({'displayName': "initial", 'email':"", 'photoURL':"", "uid":""})

    let navigate = useNavigate()


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

    const check_user = () => {
        getUserInfo().then(i=> {
            set_user({...user, ...i as object})
        }).catch(e=> {
            set_user({...user})
        })
    }

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
        check_user();
    }, []);

    const empty = () => {}

        
    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{ duration: 1 }}
            >
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
                    <div>
                        <div className="stream_landing_button"><StreamButton/></div>
                        <div className="small_avatar_pfp" onClick={()=>active.menu_overlay?new_active("menu_overlay"):new_active("menu_overlay", true)}>
                            <SmallAvatar alt="user_pfp" src={user.photoURL}/>
                        </div>
                    </div> : 
                    <div>
                        <div className="login_landing" onClick={()=>navigate("/login")} ><Button1 name="Login" icon={login_icon} textColor="white" buttonColor="#5a25b9" top="25%" left="12%"/></div>
                    </div>
                }
            </div>
            <div className="rectangle3" onClick={()=>set_active({...active_default})}>
                <div className="rectangle7">
                    <div className="landing_title"><span className="landing_title_name">Games</span> <div  style={{display:'inline'}}className="landing_title_icon_button"><LongIconButton placeholder="Search" icon_start={search_icon} icon_end={adjust_search_icon} buttonColor="#5225A5" textColor="#CCCCCC" paddingLeft="1rem"/></div></div>
                    <div className="landing_title2"><span className="landing_title_name">Streamers</span> <div  style={{display:'inline'}}className="landing_title_icon_button"><LongIconButton placeholder="Search" icon_start={search_icon} icon_end={adjust_search_icon} buttonColor="#5225A5" textColor="#CCCCCC" paddingLeft="1rem"/></div></div>
                    <div className="landing_title3"><span className="landing_title_name">Fun Events</span> <div  style={{display:'inline'}}className="landing_title_icon_button"><LongIconButton placeholder="Search" icon_start={search_icon} icon_end={adjust_search_icon} buttonColor="#5225A5" textColor="#CCCCCC" paddingLeft="1rem"/></div></div>
                </div>


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
