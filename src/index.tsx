import { ReactNode } from 'react';

export interface ReactEchartsProps {
  children: ReactNode;
}

export function ReactEcharts({ children }: ReactEchartsProps) {
  return <div className="ReactEcharts">{children}</div>;
}
