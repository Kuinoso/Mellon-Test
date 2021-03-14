import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './styles';
import Order from '../../interfaces/Order';
import Product from '../../interfaces/Product';
import ShippingMethod from '../../interfaces/ShippingMethod';
import ListItems from '../ListItems';

export default function CreateOrder() {
    const classes = useStyles();
    const history = useHistory();

    const shippingMethods: [] = useSelector(
        (store: any) => store.orderReducer.shippingMethods
    );

    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [shippingMethod, setShippingMethod] = useState('');
    const [lineItems, setLineItems] = useState<any[]>([])
    const [form, setForm] = useState({
        seller_store: '',
        external_order_number: '',
        buyer_full_name: '',
        buyer_phone_number: '',
        buyer_email: '',
        shipping_adress: '',
        shipping_city: '',
        shipping_region: '',
        shipping_country: '',
    });

    const handleChange = (e: any): void => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSelectChange = (e: any): void => {
        setShippingMethod(e.target.value);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    const getLineItems = (list: Product[]): void => {
        setLineItems(list);
    };

    const validateForm = () => {
        return form.seller_store &&
            form.external_order_number &&
            form.buyer_full_name &&
            form.buyer_phone_number &&
            form.buyer_email &&
            form.shipping_adress &&
            form.shipping_city &&
            form.shipping_region &&
            form.shipping_country &&
            shippingMethod &&
            lineItems.length > 0
    };

    const createOrder = () => {
        setLoading(true);

        const method: ShippingMethod = shippingMethods.filter((item: any) => item.name === shippingMethod)[0];
        const order: Order = {
            seller_store: form.seller_store,
            shipping_method: method,
            external_order_number: form.external_order_number,
            buyer_full_name: form.buyer_full_name,
            buyer_phone_number: form.buyer_phone_number,
            buyer_email: form.buyer_email,
            shipping_adress: form.shipping_adress,
            shipping_city: form.shipping_city,
            shipping_region: form.shipping_region,
            shipping_country: form.shipping_country,
            line_items: lineItems
        };

        axios.post('/api/user/newOrder', order)
            .then(response => {
                setLoading(false);

                if (response.data.includes('saved')) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Order created',
                    }).then(() => history.push('/myOrders'));
                };
            })
            .catch(err => console.log(err))
    };

    const textField = (name: string, label: string, value: any) => {
        return (
            <TextField
                label={label}
                name={name}
                value={value}
                className={classes.textField}
                onChange={handleChange}
            />
        );
    };

    return (
        <div className={classes.container}>
            <div className={classes.form}>
                <h1 className={classes.title}>Create a new order</h1>
                <div className={classes.fields}>
                    <div className={classes.leftFields}>
                        {textField('seller_store', 'Seller store', form.seller_store)}
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Shipping method</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={shippingMethod}
                                onChange={handleSelectChange}
                            >
                                {shippingMethods && shippingMethods.map((item: any) => <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                        {textField('external_order_number', 'External order number', form.external_order_number)}
                        {textField('buyer_full_name', 'Buyer full name', form.buyer_full_name)}
                        {textField('buyer_phone_number', 'Buyer phone number', form.buyer_phone_number)}
                    </div>
                    <div className={classes.rightFields}>
                        {textField('buyer_email', 'Buyer email', form.buyer_email)}
                        {textField('shipping_adress', 'Shipping adress', form.shipping_adress)}
                        {textField('shipping_city', 'Shipping city', form.shipping_city)}
                        {textField('shipping_region', 'Shipping region', form.shipping_region)}
                        {textField('shipping_country', 'Shipping country', form.shipping_country)}
                    </div>
                </div>
                <div className={classes.bottom}>
                    <Button onClick={handleOpen} className={classes.button}>
                        {lineItems.length > 0 ? `Change line items (${lineItems.length})` : 'Set line items'}
                    </Button>
                    {loading ?
                        <CircularProgress className={classes.loading} />
                        :
                        <Button className={classes.bigButton} onClick={createOrder} disabled={!validateForm()}>
                            {!validateForm() ? 'All fields must be completed' : 'Create order'}
                        </Button>
                    }
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <ListItems handleClose={handleClose} getLineItems={getLineItems} listItems={lineItems} />
            </Modal>
        </div>
    );
};