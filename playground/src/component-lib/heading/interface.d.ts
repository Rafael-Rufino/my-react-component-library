import { ReactNode } from 'react';
export interface HeadingProps {
    children: ReactNode;
    textAlign?: 'left' | 'center' | 'right';
    fontSize?: string;
    description?: string;
}
