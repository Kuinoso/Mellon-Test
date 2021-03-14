import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import CancelIcon from '@material-ui/icons/Cancel';
import { useStyles } from './styles';
import Product from '../../interfaces/Product';
import ListItemsProps from '../../interfaces/ListItemsProps';

export default function ListItems({ handleClose, getLineItems, listItems }: ListItemsProps) {
    const classes = useStyles();

    const [lineItems, setLineItems] = useState<any[]>([]);
    const [formError, setFormError] = useState(false);
    const [form, setForm] = useState({
        name: '',
        qty: '',
        weight: ''
    });

    useEffect(() => {
        if (listItems.length > 0) {
            setLineItems(listItems);
        }
    }, []);

    const handleChange = (e: any): void => {
        setFormError(false);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const addItem = () => {
        const tempList: any[] = lineItems;
        const reg = new RegExp('^[0-9]+$');

        if (!reg.test(form.qty) || !reg.test(form.weight)) {
            setFormError(true);
            return;
        };

        const item = {
            name: form.name,
            qty: Number(form.qty),
            weight: Number(form.weight)
        };
        tempList.push(item);

        setForm({
            name: '',
            qty: '',
            weight: ''
        });
        setLineItems(tempList);
    };

    const deleteItem = (name: string) => {
        const tempArray: any[] = lineItems.filter(item => item.name !== name);
        setLineItems(tempArray);
    };

    const validateForm = () => {
        return form.name && form.qty && form.weight;
    };

    const validateList = () => {
        return lineItems.length > 0;
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
            <CancelIcon className={classes.cancel} onClick={() => handleClose()}/>
            <h1 className={classes.title}>Add line items</h1>
            <div className={classes.body}>
                <div className={classes.fields}>
                    {textField('name', 'Name', form.name)}
                    {textField('qty', 'Quantity', form.qty)}
                    {textField('weight', 'Weight', form.weight)}

                    {formError ?
                        <span className={classes.error}>Quantity and Weight values must be only numbers</span>
                        :
                        <Button onClick={addItem} className={classes.button} disabled={!validateForm()} >
                            Add item
                        </Button>
                    }
                </div>
                <div className={classes.list}>
                    {lineItems.length === 0 &&
                        <h3 className={classes.text}>Please add at least 1 item.</h3>
                    }
                    {lineItems.length > 0 && lineItems.map((item, i) =>
                        <div key={i} className={classes.item}>
                            <p className={classes.par}>{item.qty} {item.name} -- {item.weight}</p>
                            <CloseIcon className={classes.delete} onClick={() => deleteItem(item.name)} />
                        </div>
                    )}
                </div>
            </div>
            <Button onClick={() => {getLineItems(lineItems); handleClose()}} className={classes.bigButton} disabled={!validateList()} >
                Save items
            </Button>
        </div>
    );
};