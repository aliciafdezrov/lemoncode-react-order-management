import React from "react";
import {OrderHeader} from "./order-header/order-header.component";
import {OrderDetail} from "./order-detail/order-detail.component";
import Stack from "@mui/material/Stack";
import {initializeOrderState, orderInfoReducer} from "./order.reducer";

export const OrderContainer: React.FC = (props) => {
    const [orderInfo, dispatch] = React.useReducer(orderInfoReducer, initializeOrderState());

    const totalAmount = React.useMemo((): number => orderInfo.lines.filter(line => line.status === "Valido").reduce((totalAmount, validLine) => validLine.price + totalAmount, 0)
        , [orderInfo.lines]);

    const percentOfValidLines = React.useMemo((): number => {
        const numberOfLines = orderInfo.lines.length;
        const numberOfValidLines = orderInfo.lines.filter(line => line.status === "Valido").length;
        const percentOfValidLines = (numberOfValidLines / numberOfLines) * 100;
        return Math.trunc(percentOfValidLines);
    }, [orderInfo.lines]);

    return (
        <Stack display="column" spacing={3}>
            <OrderHeader supplier={orderInfo.supplier} date={orderInfo.date} number={orderInfo.number}
                         totalAmount={totalAmount}
                         status={percentOfValidLines}/>
            <OrderDetail itemList={orderInfo.lines} dispatch={dispatch}/>
        </Stack>
    );
};
