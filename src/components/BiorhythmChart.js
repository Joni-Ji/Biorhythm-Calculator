import { LineChart, ResponsiveContainer, XAxis, Line,CartesianGrid, ReferenceLine } from 'recharts';
import React from 'react';
import { calculateBiorhythmSeries } from '../calculations';
import dayjs from 'dayjs';

function formatDate (isoString){
    return dayjs(isoString).format('D MMM');
}

function BiorhythmChart({ birthDate, targetDate }) {
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBiorhythmSeries(birthDate, startDate, 31)
    .map((item) => ({...item, date:formatDate(item.date)}));
    console.log({data});
    return (
        <ResponsiveContainer width="100%" height={200}  className="biorhyythm-chart">
            <LineChart data={data}>
                <CartesianGrid vertical={false} strokeDasharray= "3 3" />
                <XAxis dataKey="date"
                    ticks={[data[3].date, data[15].date, data[28].date]} />
                <ReferenceLine x={data[15].date}/>
                <Line type="natural" dot={false} dataKey="physical" className="physical"/>
                <Line type="natural" dot={false} dataKey="emotional" className="emotional" stroke="red"/>
                <Line type="natural" dot={false} dataKey="intellectual" className="intellectual" stroke="green"/>
            </LineChart>
        </ResponsiveContainer>
    
    );
}

export default BiorhythmChart;

