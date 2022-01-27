import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Stack from '@mui/material/Stack';

interface Props {
    supplier: string;
    date: Date;
    number: string;
}

const OrderSummary: React.FC<Props> = (props) => {
    const {supplier, date, number} = props;

    return (
            <Stack spacing={2} direction="row">
                <TextField label="Número" variant="outlined" value={number}/>
                <TextField label="Proveedor" variant="outlined" value={supplier}/>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Fecha"
                        value={date}
                        onChange={() => {}}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Stack>
    );
};

export const MemoizedOrderSummary = React.memo(OrderSummary);
