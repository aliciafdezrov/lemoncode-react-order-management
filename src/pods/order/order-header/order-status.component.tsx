import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface Props {
    totalAmount: number;
    status: number;
}

export const OrderStatus: React.FC<Props> = (props) => {
    const {totalAmount, status} = props;
    const isSendButtonDisabled = Boolean(status !== 100);

    return (
        <Stack spacing={2} direction="row"
               justifyContent="space-between"
               alignItems="center">

            <Stack spacing={2} direction="row">
                <TextField
                    label="Importe total"
                    id="total-amount"
                    value={totalAmount}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">€</InputAdornment>,
                    }}
                />

                <TextField
                    label="Estado"
                    id="status"
                    value={status}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">%</InputAdornment>,
                    }}
                />
            </Stack>
            <Button variant="contained" disabled={isSendButtonDisabled}>Enviar</Button>
        </Stack>
    );
};
