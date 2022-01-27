import React from 'react';
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import * as classes from './order-header.styles';
import {OrderStatus} from "./order-status.component";
import {MemoizedOrderSummary} from "./order-summary.component";

interface Props {
    supplier: string;
    date: Date;
    number: string;
    totalAmount: number;
    status: number;
}

export const OrderHeader: React.FC<Props> = (props) => {
    const {supplier, date, number, totalAmount, status} = props;

    return (
        <Card className={classes.root}>
            <Typography variant="h5" gutterBottom component="div">Pedido a proveedor</Typography>
            <MemoizedOrderSummary supplier={supplier} date={date} number={number}/>
            <OrderStatus totalAmount={totalAmount} status={status}/>
        </Card>
    );
};
