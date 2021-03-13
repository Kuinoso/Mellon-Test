import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
import logo from '../../media/logo.png';

export default function Navbar() {
    const classes = useStyles();
    const location = useLocation();

    const style = (url: string) => {
        if (location.pathname.includes(url)) {
            return {
                color: '#A5C672',
            };
        };
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Link to={'/'} className={classes.link}>
                        <img src={logo} alt='Logo' className={classes.logo} />
                    </Link>
                    <div className={classes.buttons}>
                        <Link to={'/createOrder'} className={classes.link}>
                            <Button
                                style={style('createOrder')}
                                className={classes.navButton}
                            >
                                Create order
                            </Button>
                        </Link>
                        <Link to={'/myOrders'} className={classes.link}>
                            <Button
                                style={style('myOrders')}
                                className={classes.navButton}
                            >
                                My orders
                            </Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};