export default {
    responsive: true,
    title: {
        display: true,
        fontColor: '#fff',
        position: 'top',
        text: 'Insulinniveau'
    },
    legend: {
        position: 'bottom',
        // align: 'start',
        display: true,

        labels: {
            fontColor: '#fff',
            boxWidth: 10,
            usePointStyle: true
        }
    },
    scales: {
        yAxes: [{
                id: 'A',
                ticks: {
                    beginAtZero: true,
                    fontColor: '#fff',
                },
                scaleLabel: {
                    display: true,
                    fontColor: '#fff',
                    labelString: 'Blodsukker (mMol/L)'
                }
            },
            {
                ticks: {
                    beginAtZero: true,
                    fontColor: '#fff',
                    stepSize: 30,
                    min: 0,
                    max: 100,
                },
                gridLines: false,
                id: 'B',
                type: 'linear',
                position: 'right',
                scaleLabel: {
                    display: true,
                    fontColor: '#fff',
                    labelString: 'Insulin (mMol/L)'
                }
            }
        ],
        xAxes: [{
            ticks: {
                fontColor: '#fff'
            },
            scaleLabel: {
                display: true,
                fontColor: '#fff',
                labelString: 'Tid (min)'
            }
        }]
    }
}