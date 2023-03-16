import { createContext, useContext } from 'react';

const ChartThemeContext = createContext<any>(undefined);

export const ChartThemeProvider = ChartThemeContext.Provider;

export const useChartTheme = () => useContext(ChartThemeContext);
