import React from 'react';
import {OrderContainer} from "../pods";
import {CenteredLayout} from "../layouts";

export const OrderScene: React.FC = () => {
    return (
        <CenteredLayout>
            <OrderContainer/>
        </CenteredLayout>
    );
};
