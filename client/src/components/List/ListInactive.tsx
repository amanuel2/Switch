import React from 'react'
import './ListInactive.css'
import ListProps from './ListProps'

const ListInactive = ({name, icon}: ListProps) => {
    return (
        <div>
            <span style={{backgroundImage: `url(${icon})`, backgroundRepeat: 'no-repeat'}} className="icon_img"></span> 
            <a href="/"><span className="icon_name">{name}</span></a>
        </div>
    )
}

export default ListInactive
