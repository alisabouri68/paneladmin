"use client"
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useResizeDetector } from 'react-resize-detector';

export default function Chartbars() {
    const { width, height, ref } = useResizeDetector();
    return (
        <div ref={ref} style={{ width: '100%', height: '400px' }}>
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday','Saturday'] }]}
                series={[{
                    data: [6,1,5,2,4,3,6], color: 'green',
                    areaStyle: { fill: '#0D800D' },
                },
                 {
                    data: [1,2,3,4,5,6,1], color: 'lightgreen',
                    areaStyle: { fill: '#8EE38E' },
                },
                 {
                    data: [5,1,6,4,3,2,5], color: 'DarkGreen',
                    areaStyle: { fill: '#0D670D' },
                },{
                    data: [2,5,4,6,1,2,3], color: 'green',
                    areaStyle: { fill: '#0D800D' },
                },
                 {
                    data: [1,1,3,5,5,4,2], color: 'lightgreen',
                    areaStyle: { fill: '#8EE38E' },
                },
                 {
                    data: [3,2,1,4,5,6,5], color: 'lightgreen',
                    areaStyle: { fill: '#8EE38E' },
                }]}
                width={width}
                height={height}
            />
        </div>
    );
}