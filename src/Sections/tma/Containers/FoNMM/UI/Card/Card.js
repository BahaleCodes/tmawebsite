import React from 'react';
import { useState } from 'react';

import classes from './Card.module.css';

const Card = props => {
    const [open, setOpen] = useState(false);
    return (
        <div className={classes.card}>
            <div className={classes.head}>
                <h2 style={{ backgroundColor: 'white' }}>{props.head}</h2>
                {
                    open
                        ? <button className={classes.btn} onClick={() => (setOpen(prevOpen => !prevOpen))} >
                            <i className='fa fa-angle-up'></i>
                        </button>
                        : <button className={classes.btn} onClick={() => (setOpen(prevOpen => !prevOpen))} >
                            <i className='fa fa-angle-down'></i>
                        </button>
                }
            </div>
            {open && props.children}
        </div>
    )
};

export default Card;