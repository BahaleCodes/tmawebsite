import React from 'react'

import './Icon.css';

const icon = (props) => {
    return(
        <div className={"Icon"}>
            <img src={props.pic}></img>
        </div>
    )
}

export default icon;