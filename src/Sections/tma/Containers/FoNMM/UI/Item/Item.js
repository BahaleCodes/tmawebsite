import React from 'react';

import classes from './Item.module.css';

const Item = (props) => {
    return (
        <li className={classes.item}>
            <div>
                <div className={classes.head_img}>
                    <img src={props.image} alt='Category' />
                </div>
                <h3>{props.name}</h3>
                <div className={classes.age}>
                    {
                        props.age
                            ? `${props.age} Years old`
                            : ''
                    }
                </div>
            </div>
        </li>
    )
}

export default Item;