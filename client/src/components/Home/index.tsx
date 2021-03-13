import React from 'react';
import { useStyles } from './styles';
import safe from '../../media/safe.png';
import box from '../../media/box.png';
import pig from '../../media/pig.png';

export default function Home() {
    const classes = useStyles();

    const imageBlock = (img: string, text: string) => {
        return (
            <div className={classes.imageBlock}>
                <img src={img} alt={text} className={classes.image} />
                <h4 className={classes.imageText}>{text}</h4>
            </div>
        );
    };

    return (
        <div className={classes.container}>
            <div className={classes.leftDiv}>
                <div>
                    {imageBlock(safe, 'Simple')}
                </div>
                <div className={classes.bottomImages}>
                    {imageBlock(box, 'Transparent')}
                    {imageBlock(pig, 'Affordable')}
                </div>
            </div>
            <div className={classes.rightDiv}>
                <h1 className={classes.title}>We help you manage your sell orders</h1>
                <h3 className={classes.text}>Create new orders, see all your orders and view specific details about an order.</h3>
            </div>
        </div>
    );
};
