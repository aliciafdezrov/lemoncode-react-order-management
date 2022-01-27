export interface OrderInfo {
    number: string;
    date: Date;
    supplier: string;
    lines: OrderLine[];
}
export type Status = "Valido" | "Invalido" | "Pendiente";
export interface OrderLine {
    id: number;
    description: string;
    price: number;
    status: Status;
}
