import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useStyles } from './styles';
import CompleteOrder from '../../interfaces/CompleteOrder';
import Product from '../../interfaces/Product';
import classes from '*.module.css';

export default function Order() {
    const classes = useStyles();

    const order: CompleteOrder = useSelector(
        (store: any) => store.orderReducer.order
    );

    return (
        <div className={classes.container}>
            {order &&
                <div className={classes.card}>
                    <div className={classes.details}>
                        <div className={classes.detail}>
                            <h4 className={classes.listTitle}>Order information</h4>
                            <p className={classes.line}>Order #{order.external_order_number}</p>
                            <p className={classes.line}>Full name: <span style={{ textTransform: 'capitalize' }}>{order.buyer_full_name}</span></p>
                            <p className={classes.line}>Phone number: {order.buyer_phone_number}</p>
                            <p className={classes.line}>Email: {order.buyer_email}</p>
                        </div>
                        <div className={classes.detail}>
                            <h4 className={classes.listTitle}>Shipping info</h4>
                            <p className={classes.line}>Adress: {order.shipping_adress}</p>
                            <p className={classes.line}>City: {order.shipping_city}</p>
                            <p className={classes.line}>Region: {order.shipping_region}</p>
                            <p className={classes.line}>Country: {order.shipping_country}</p>
                        </div>
                        <div className={classes.detail}>
                            <h4 className={classes.listTitle}>Promise dates</h4>
                            <p className={classes.line}>
                                Packing
                                {order.pack_promise_max ? `: Min ${order.pack_promise_min}` : ': -'}
                                {order.pack_promise_max ? `, Max ${order.pack_promise_max}` : '-'}
                            </p>
                            <p className={classes.line}>
                                Shipping
                                {order.ship_promise_min ? `: Min ${order.ship_promise_min}` : ': -'}
                                {order.ship_promise_max ? `, Max ${order.ship_promise_max}` : '-'}
                            </p>
                            <p className={classes.line}>
                                Delivery
                                {order.delivery_promise_min ? `: Min ${order.delivery_promise_min}` : ': -'}
                                {order.delivery_promise_max ? ` Max ${order.delivery_promise_max}` : '-'}
                            </p>
                            <p className={classes.line}>
                                Ready for pickup
                                {order.ready_pickup_promise_min ? `: Min ${order.ready_pickup_promise_min}` : ': -'}
                                {order.ready_pickup_promise_max ? `, Max ${order.ready_pickup_promise_max}` : '-'}
                            </p>
                        </div>
                    </div>
                    <List component="nav" aria-label="secondary mailbox folders" className={classes.list}>
                        <h4 className={classes.listTitle}>Line Items</h4>
                        {order.line_items.map((item: Product) =>
                            <ListItem button className={classes.item}>
                                <ListItemText primary={item.name} className={classes.text}/>
                                <ListItemText primary={item.qty > 1 ? `${item.qty} units` : `${item.qty} unit`} className={classes.text}/>
                                <ListItemText primary={`${item.weight} kg`} className={classes.text}/>
                            </ListItem>
                        )}
                    </List>
                </div>
            }
        </div>
    );
};