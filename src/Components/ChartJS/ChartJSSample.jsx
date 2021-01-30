import React, {useState, createRef} from 'react'
import {Doughnut} from 'react-chartjs-2';
import uniqid from 'uniqid'
import RadarSample from './RadarSample'


const data = {
    datasets: [
        {
            label: '# of Votes',
            data: [
                12,
                19,
                3,
                5,
                2,
                3
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Blue',
        'Yellow',
        'Green',
        'Purple',
        'Orange'
    ]
};

const ChartJSSample = () => {
    const [ref] = useState(createRef());
    console.log(ref)

    return (
        <div style={
            {width: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0 auto', textAlign: 'center'}
        }>
            <header style={{padding: '1em'}}>Chart.js Sample</header>
            <hr/>
            <div>
            <header style={{padding: '1em'}}>Donut</header>
                <Doughnut ref={ref}
                    data={data}
                    id={
                        uniqid()
                    }
                    />

            </div>
            <div>
            <header style={{paddingTop: '2em'}}>Radar</header>
                <RadarSample />
            </div>
        </div>
    )
}

export default ChartJSSample
