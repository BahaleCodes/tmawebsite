import React, { useState } from 'react';

import classes from './finalists.module.css';
import FonmmHeader from './FonmmHeader';
// import Card from './UI/Card/Card';
import Item from './UI/Item/Item';

const Finalists = (props) => {
    const [all, setAll] = useState(false);

    const fetchPreTeen = props.data
        ? props.data.fonmmData.Pre_Teen.map((x) => (
            <Item
                key={x.id}
                id={x.id}
                name={x.name}
                age={x.age}
                image={x.image}
            />
        ))
        : "Loading"
    const fetchJnrTeen = props.data
        ? props.data.fonmmData.Jnr_Teen.map((x) => (
            <Item
                key={x.id}
                id={x.id}
                name={x.name}
                age={x.age}
                image={x.image}
            />
        ))
        : "Loading"
    const fetchTeen = props.data
        ? props.data.fonmmData.Teen.map((x) => (
            <Item
                key={x.id}
                id={x.id}
                name={x.name}
                age={x.age}
                image={x.image}
            />
        ))
        : "Loading"
    const fetchSenior = props.data
        ? props.data.fonmmData.Senior.map((x) => (
            <Item
                key={x.id}
                id={x.id}
                name={x.name}
                age={x.age}
                image={x.image}
            />
        ))
        : "Loading"
    const fetchMissDrag = props.data
        ? props.data.fonmmData.Miss_Drag.map((x) => (
            <Item
                key={x.id}
                id={x.id}
                name={x.name}
                age={x.age}
                image={x.image}
            />
        ))
        : "Loading"

    // const categories = (
    //     <div>
    //         <h1>Categories</h1>
    //         <div className={classes.cards}>
    //             <div className={classes.card_column}>
    //                 <Card head={"Pre' Teen (8-12 years)"}>
    //                     <ul>{fetchPreTeen}</ul>
    //                 </Card>
    //                 <Card head={"Jnr. Teen (13-15 years)"}>
    //                     <ul>{fetchJnrTeen}</ul>
    //                 </Card>
    //             </div>
    //             <div className={classes.card_column}>
    //                 <Card head={"Teen (16-19 years)"}>
    //                     <ul>{fetchTeen}</ul>
    //                 </Card>
    //                 <Card head={"Senior (20-29 years)"}>
    //                     <ul>{fetchSenior}</ul>
    //                 </Card>
    //             </div>
    //             <div className={classes.card_column}>
    //                 <Card head={"Miss Drag (17-27 years)"}>
    //                     <ul>{fetchMissDrag}</ul>
    //                 </Card>
    //             </div>
    //         </div>

    //         <div className={classes.cards_md}>
    //             <div className={classes.card_column}>
    //                 <Card head={"Pre' Teen (8-12 years)"}>
    //                     <ul>{fetchPreTeen}</ul>
    //                 </Card>
    //                 <Card head={"Jnr. Teen (13-15 years)"}>
    //                     <ul>{fetchJnrTeen}</ul>
    //                 </Card>
    //                 <Card head={"Teen (16-19 years)"}>
    //                     <ul>{fetchTeen}</ul>
    //                 </Card>
    //             </div>
    //             <div className={classes.card_column}>
    //                 <Card head={"Senior (20-29 years)"}>
    //                     <ul>{fetchSenior}</ul>
    //                 </Card>
    //                 <Card head={"Miss Drag (17-27 years)"}>
    //                     <ul>{fetchMissDrag}</ul>
    //                 </Card>
    //             </div>
    //         </div>
    //     </div>
    // )
    // const viewAll = () => {
    //     return (
    //         <div>
    //             <h1>All Finalists</h1>
    //             {
    //                 props.data
    //                     ? props.data.allFonmm.map((x) => (
    //                         <div className="col-sm-6 col-md-3 col-lg-3">
    //                             <Item
    //                                 key={x.id}
    //                                 id={x.id}
    //                                 name={x.name}
    //                                 age={x.age}
    //                                 image={x.image}
    //                             />
    //                         </div>
    //                     ))
    //                     : 'loading...'
    //             }
    //         </div>
    //     )
    // }
    // const toggleView = () => {
    //     setAll(!all);
    // }


    return (
        <div id='finalists' style={{ marginTop: "85px" }} className='text-center'>
            <div className='section-title'>
                <h2 className={classes.text}>Our Winners</h2>
            </div>
            <div className={classes.img__cnt}>
                <FonmmHeader />
            </div>
            {/* {all && viewAll()} */}
        </div>
    )
};

export default Finalists;
