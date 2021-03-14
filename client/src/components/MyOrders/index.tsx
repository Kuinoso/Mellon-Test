import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOrder } from '../../redux/orderReducer/Actions';
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './styles';
import CompleteOrder from '../../interfaces/CompleteOrder';

export default function MyOrders() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const [allOrders, setAllOrders] = useState<CompleteOrder[]>([])

    useEffect(() => {
        axios.get('/api/user/getAllOrders')
            .then(response => {
                if (response.data) {
                    const myOrders: CompleteOrder[] = response.data;

                    setAllOrders(myOrders);
                };
            })
            .catch(err => console.log(err));
    }, []);

    const goToOrder = (order: CompleteOrder) => {
        dispatch(getOrder(order));

        history.push(`/order/${order.internal_order_number}`);
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>My Orders</h1>
            {allOrders.length > 0 ?
                <List component="nav" aria-label="secondary mailbox folders" className={classes.list}>
                    {allOrders.map((item: CompleteOrder) =>
                        <ListItem button className={classes.item} onClick={() => goToOrder(item)}>
                            <ListItemText primary={`#${item.external_order_number}`} className={classes.text} />
                            <ListItemText primary={item.seller_store} className={classes.text2} />
                            <ListItemText primary={item.creation_date} className={classes.text} />
                            <ListItemText primary={item.shipping_method.name} className={classes.text2} />
                        </ListItem>
                    )}
                </List>
                :
                <h3 className={classes.error}>You have no orders, please create a new order.</h3>
            }
        </div>
    );
};