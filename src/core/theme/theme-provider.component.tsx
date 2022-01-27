import * as React from 'react';
import { theme } from './theme';
import {ThemeProvider} from "@mui/material";

export const ThemeProviderComponent = props => {
    const { children } = props;

    return (
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
    );
};
