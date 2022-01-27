import React from 'react';
import {OrderLine} from "../order.vm";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import {Action, actionIds} from "../order.reducer";

interface Props {
    line: OrderLine;
    isSelected: boolean;
    onClick: (lineId: number) => void;
    dispatch: React.Dispatch<Action>;
}

export const OrderDetailRow: React.FC<Props> = (props) => {
    const {line, isSelected, onClick, dispatch} = props;

    const handleOnChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const price = Number(event.target.value);
        const updatedLine = {...line, price};
        dispatch({type: actionIds.setLineAmount, payload: updatedLine});
    }

    return (
        <TableRow
            hover
            role="checkbox"
            tabIndex={-1}
            selected={isSelected}
        >
            <TableCell padding="checkbox">
                <Checkbox
                    color="primary"
                    checked={isSelected}
                    onChange={() => onClick(line.id)}
                />
            </TableCell>
            <TableCell align="left">{line.status}</TableCell>
            <TableCell
                component="th"
                scope="row"
                padding="none"
            >
                {line.description}
            </TableCell>
            <TableCell align="left">
                <TextField
                    id="line-price"
                    value={line.price}
                    onChange={handleOnChangePrice}
                    type="number"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">€</InputAdornment>,
                        inputProps: {min: 0}
                    }}
                /></TableCell>
        </TableRow>
    );
};
