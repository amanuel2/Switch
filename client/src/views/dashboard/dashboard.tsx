import React, { useState, useEffect } from 'react'
import verify from '../../util/auth/verify'
import { money_icon, logo } from './public/images'
import { motion } from 'framer-motion';
import getUserInfo from '../../util/auth/info'
import {useNavigate} from 'react-router-dom'
import {games_icon, champ_icon, chat_icon, music_icon, royale_icon, student_icon, streamer_1, streamer_2, streamer_3, profile_icon,creator_icon,friends_icon,star_icon,wallet_icon,settings_icon,help_icon,feedback_icon,login_icon,logout_icon, search_icon,adjust_search_icon,video_icon} from '../landing/public/images' 
import SmallAvatar from '../../components/Avatar/SmallAvatar';
import ListMenuItems from '../../components/List/ListMenuItems'
import { AnimatePresence } from 'framer-motion'
import './dashboard.css'
import { logout_submit } from '../../util/auth/submit'


const Dashboard = () => {

    let navigate = useNavigate()
    const [user, set_user]  = useState({'displayName': "initial", 'email':"", 'photoURL':"", "uid":""})
    const [menu_overlay, set_menu_overlay] = useState(false)

    verify().then(i=> {})
    .catch(e => {
        navigate("/")
    })

    const check_user = () => {
        getUserInfo().then(i=> {
            set_user({...user, ...i as object})
        }).catch(e=> {
            navigate("/")
        })
    }

    useEffect(() => {
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
            <div className="dashboard_navbar">
                <motion.img 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={()=>navigate("/")}
                    src={logo} className="dashboard_navbar_logo"/>
                <div className="dashboard_navbar_pfp" onClick={()=>set_menu_overlay(!menu_overlay)}><SmallAvatar alt="pfp" src={user.photoURL}/></div>
            </div>

            <div className="rectangle10">
                <div className="main_dashboard_container">
                    <div className="left_dashboard_container">
                        <div className="activity_container">
                            <div className="dashboard_card_header">Activity</div>
                            <div className="activity_card_group">
                                <div className="activity_card1">
                                    <div className="activity_card_header">New Followers</div>
                                    <div className="activity_card_content">25</div>
                                </div>
                                <div className="activity_card2">
                                    <div className="activity_card_header">New Subscribers</div>
                                    <div className="activity_card_content">71</div>
                                </div>
                                <div className="activity_card3">
                                    <div className="activity_card_header">Raids</div>
                                    <div className="activity_card_content">N/A</div>
                                </div>
                                <div className="activity_card4">
                                    <div className="activity_card_header">Hosts</div>
                                    <div className="activity_card_content">N/A</div>
                                </div>
                            </div>
                        </div>
                        <div className="health_container">
                            <div className="dashboard_card_header">Health</div>
                            <div className="health_card_group">
                                <div className="activity_card1">
                                    <div className="activity_card_header">Viewers</div>
                                    <div className="activity_card_content">159</div>
                                </div>
                                <div className="activity_card2">
                                    <div className="activity_card_header">Followers</div>
                                    <div className="activity_card_content">83</div>
                                </div>
                                <div className="activity_card3">
                                    <div className="activity_card_header">Bitrate</div>
                                    <div className="activity_card_content">3500</div>
                                </div>
                                <div className="activity_card4">
                                    <div className="activity_card_header">FPS</div>
                                    <div className="activity_card_content">60</div>
                                </div>
                            </div>
                            <div className="online_card">
                                <div className="online_card_content">Online</div>
                            </div>
                        </div>
                    </div>
                    <div className="center_dashboard_container">
                        <div className="quick_actions_container"></div>
                        <div className="stream_container"></div>
                        <div className="stream_info_container"></div>
                    </div>
                    <div className="right_dashboard_container">
                        <div className="chat_container"></div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                    {menu_overlay && (<motion.div key="box" className="rectangle6_dash"
                            initial={{y:'50%', opacity:0, scale:0.5}}
                            animate={{y:0, opacity:1, scale: 1}}
                            exit={{y:'50%', opacity:0, transition:{duration: 0.1}}}
                            transition={{duration:0.2, ease: "easeOut"}}
                            >
                                <div className="menu_items_org_dashboard">
                                <ListMenuItems 
                                    items={["Profile", "Dashboard", "Friends", "Subscriptions", "Wallet", "Settings", "Help", "Feedback", "Logout"]}
                                    icons={[profile_icon, creator_icon, friends_icon, star_icon, wallet_icon, settings_icon, help_icon, feedback_icon, logout_icon]}
                                    fns={[empty,()=>navigate("/dashboard"),empty,empty,empty,empty,empty,empty,logout_submit]}
                                /></div>
                            </motion.div>
                    )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Dashboard
