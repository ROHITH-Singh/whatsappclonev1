import React from 'react'
import './sidebarchats.css'
import { Avatar } from '@material-ui/core'

function sidebarchats({url}) {
    return (
        <div className="sidebarchat">
            <Avatar src={url} />
            <div className="sidebarchat__info">
                <h2>Room name</h2>

                    <p>description</p>            </div>
            
        </div>
    )
}

export default sidebarchats
