import React from 'react';
import {OrderLine} from "../order.vm";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import {OrderDetailRow} from "./order-detail-row.component";
import {Action, actionIds} from "../order.reducer";

interface Props {
    itemList: OrderLine[];
    dispatch: React.Dispatch<Action>;
}

export const OrderDetail: React.FC<Props> = (props) => {
    const {itemList, dispatch} = props;
    const [selectedLines, setSelectedLines] = React.useState<number[]>([]);

    const handleOnClick = (lineId: number) => {
        const copyOfSelectedLines = [...selectedLines];
        const lineIndex = copyOfSelectedLines.indexOf(lineId);
        if (lineIndex >= 0) {
            copyOfSelectedLines.splice(lineIndex, 1);
        } else {
            copyOfSelectedLines.push(lineId);
        }
        setSelectedLines(copyOfSelectedLines);
    }

    const handleOnValidate = () => {
        props.dispatch({type: actionIds.validateLines, payload: [...selectedLines]})
    }

    const handleOnInvalidate = () => {
        props.dispatch({type: actionIds.invalidateLines, payload: [...selectedLines]})
    }

    return (
        <>
            <ButtonGroup variant="outlined">
                <Button onClick={handleOnValidate}>Validar</Button>
                <Button onClick={handleOnInvalidate}>Invalidar</Button>
            </ButtonGroup>
            <Paper sx={{width: '100%', mb: 2}}>
                <TableContainer>
                    <Table
                        sx={{minWidth: 750}}
                        aria-labelledby="item list"
                        size='medium'
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox"/>
                                <TableCell
                                    align='left'
                                    padding='normal'
                                >
                                    Estado
                                </TableCell>
                                <TableCell
                                    align='left'
                                    padding='normal'
                                >
                                    Descripción
                                </TableCell>
                                <TableCell
                                    align='left'
                                    padding='normal'
                                >
                                    Importe
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {itemList.map((row) => {
                                const isSelected = selectedLines.some(line => line === row.id);
                                return (
                                    <OrderDetailRow line={row} key={row.id} onClick={handleOnClick}
                                                    isSelected={isSelected} dispatch={dispatch}/>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    );
};
