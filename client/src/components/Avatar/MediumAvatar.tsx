import React from 'react'
import AvatarProps from './AvatarProps'

const MediumAvatar = ({alt, src}: AvatarProps) => {
    return (
        <div className="medium_avatar">
            <img className="medium_avatar_img" alt={alt} src={src}/>
        </div>
    )
}

export default MediumAvatar
