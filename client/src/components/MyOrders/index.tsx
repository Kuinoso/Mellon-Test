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
                            <p className={classes.text}>#{item.external_order_number}</p>
                            <p className={classes.text2}>{item.seller_store}</p>
                            <p className={classes.text}>{item.creation_date}</p>
                            <p className={classes.text2}>{item.shipping_method.name}</p>
                        </ListItem>
                    )}
                </List>
                :
                <h3 className={classes.error}>You have no orders, please create a new order.</h3>
            }
        </div>
    );
};