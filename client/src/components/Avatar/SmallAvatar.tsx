import React from 'react'
import AvatarProps from './AvatarProps'
import './SmallAvatar.css'

const SmallAvatar = ({alt, src}: AvatarProps) => {
    return (
        <div className="small_avatar">
            <img className="small_avatar_img" alt={alt} src={src}/>
        </div>
    )
}

export default SmallAvatar
