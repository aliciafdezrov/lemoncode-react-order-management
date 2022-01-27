import {OrderInfo, OrderLine} from "./order.vm";

export const initializeOrderState = (): OrderInfo => ({
    number: "293848474",
    date: new Date(),
    supplier: "Supplier A",
    lines: [{id: 1, description: "Reactivos maquinaria", price: 2345, status: "Pendiente"}, {
        id: 2,
        description: "Recambios impresión",
        price: 135,
        status: "Pendiente"
    }, {id: 3, description: "Soportes plataforma", price: 540, status: "Pendiente"}]
});

export interface Action {
    type: string;
    payload: any;
}

export const actionIds = {
    validateLines: "validateLines",
    invalidateLines: "invalidateLines",
    setLineAmount: "setLineAmount",
};

export const orderInfoReducer = (state: OrderInfo, action: Action): OrderInfo => {
    switch (action.type) {
        case actionIds.validateLines:
            return handleValidateLinesAction(state, action.payload);
        case actionIds.invalidateLines:
            return handleInvalidateLinesAction(state, action.payload);
        case actionIds.setLineAmount:
            return handleSetLineAmount(state, action.payload);
        default:
            return state;
    }
};

const handleValidateLinesAction = (state: OrderInfo, payload: number[]): OrderInfo => ({
    ...state,
    lines: state.lines.map(line => {
        const status = payload.includes(line.id) ? "Valido" : line.status;
        return {
            ...line,
            status,
        }
    })
});

const handleInvalidateLinesAction = (state: OrderInfo, payload: number[]): OrderInfo => ({
    ...state,
    lines: state.lines.map(line => {
        const status = payload.includes(line.id) ? "Invalido" : line.status;
        return {
            ...line,
            status,
        }
    })
});

const handleSetLineAmount = (state: OrderInfo, payload: OrderLine): OrderInfo => ({
    ...state,
    lines: state.lines.map(line => ({
        ...line,
        price: payload.id === line.id ? payload.price : line.price
    }))
});
