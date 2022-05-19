import React from 'react'
import './StreamerCard.css'
import eye from './public/eye.png'
import led from './public/streaming_led.png'
import MediumAvatar from '../Avatar/MediumAvatar'

type StreamerCardProps = {
    name: string,
    pfp: string
    views: number,
}

const StreamerCard = ({name, pfp, views}: StreamerCardProps) => {

    const kFormatter = (num: number) => {
        return Math.abs(num) > 999 ? Math.sign(num)*Number((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

    return (
        <div className="streamer_card">
           <span className="streamer_card_icon"><MediumAvatar alt={name} src={pfp}/></span>
           <div className="stream_infos">
            <span className="streamer_card_name">{name}</span>
            <div style={{backgroundImage: `url(${led})`, backgroundRepeat: 'no-repeat'}} className="streamer_card_led"></div>
            <div style={{backgroundImage: `url(${eye})`, backgroundRepeat: 'no-repeat'}} className="streamer_card_eye"></div>
            <div className="streamer_card_views">{kFormatter(views)}</div>
           </div>
        </div>
    )
}

export default StreamerCard
