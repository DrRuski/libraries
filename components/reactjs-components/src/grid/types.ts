import React, { FunctionComponent } from 'react';

export enum GridRenderingType {
    Table = 'table',
    Div = 'div'
}

export interface CSSGridProps {
    cellComponent: React.FunctionComponent<{ cell: any; totalColSpan: number }>;
    cells: any;
    children?: FunctionComponent<any>;
    totalColSpan?: number;
    style?: React.CSSProperties;
}

export interface TableGridProps {
    cellComponent: React.FunctionComponent<{ cell: any; totalColSpan: number }>;
    rows: any;
    children?: FunctionComponent<any>;
    totalColSpan?: number;
    style?: React.CSSProperties;
}

export interface GridRendererProps {
    className?: string;
    cellComponent: React.FunctionComponent<{ cell: any; totalColSpan: number }>;
    type: GridRenderingType;
    grid: {
        rows: any;
    };
    children?: FunctionComponent<any>;
}
