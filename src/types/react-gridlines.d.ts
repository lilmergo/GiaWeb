declare module 'react-gridlines' {
    import React from 'react';

    interface GridLinesProps extends React.HTMLAttributes<HTMLElement>{
        component?: keyof JSX.IntrinsicElements; // Allows replacing <div> with elements like <span>, <svg>, etc.
        cellWidth?: number; // Width of the primary cell
        cellHeight?: number; // Height of the primary cell (falls back to cellWidth if not provided)
        lineColor?: string; // Color of the primary cell
        strokeWidth?: number; // Line weight of the primary cell
        dashArray?: string; // Line pattern for the primary cell (e.g., "3 1")

        // Secondary gridlines
        cellWidth2?: number; // Width of the secondary cell
        cellHeight2?: number; // Height of the secondary cell
        lineColor2?: string; // Color of the secondary cell
        strokeWidth2?: number; // Line weight of the secondary cell
        dashArray2?: string; // Line pattern for the secondary cell
        children?: React.ReactNode;
    }

    const GridLines: React.FC<GridLinesProps>;

    export default GridLines;
}
