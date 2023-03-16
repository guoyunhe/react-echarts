import type {
  BarSeriesOption,
  DatasetComponentOption,
  GridComponentOption,
  LineSeriesOption,
  TitleComponentOption,
  TooltipComponentOption,
} from 'echarts';
import * as echarts from 'echarts/core';
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { useChartTheme } from './ChartThemeContext';

export type ChartOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

export interface ChartProps {
  option: ChartOption;
  className?: string;
  style?: CSSProperties;
}

export interface ChartRef {
  root: HTMLDivElement | null;
  chart: echarts.ECharts | null;
}

export const Chart = forwardRef(
  ({ option, className, style }: ChartProps, ref: ForwardedRef<ChartRef>) => {
    const theme = useChartTheme();
    const rootRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<echarts.ECharts | null>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          chart: chartRef.current,
          root: rootRef.current,
        };
      },
      []
    );

    useEffect(() => {
      if (rootRef.current && !chartRef.current) {
        chartRef.current = echarts.init(rootRef.current, theme);
      }
    }, []);

    useEffect(() => {
      chartRef.current?.setOption(option);
    }, [option]);
    return <div ref={rootRef} className={className} style={{ height: 100, ...style }} />;
  }
);

Chart.displayName = 'Chart';
