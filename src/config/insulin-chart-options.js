import chartColors from '../enums/enum.chart-colors';
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

    layout: {
        padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
        }
    },

    scales: {
        yAxes: [{
                id: 'A',
                ticks: {
                    beginAtZero: true,
                    fontColor: chartColors.BloodSugarLevel,
                    stepSize: 20,
                    min: 0,
                    max: 160,
                    padding: 15
                },
                scaleLabel: {
                    display: true,
                    fontColor: chartColors.BloodSugarLevel,
                    labelString: 'Blodsukker (mMol/L)'
                }
            },
            {
                ticks: {
                    beginAtZero: true,
                    fontColor: chartColors.InsulinLevel,
                    stepSize: 50,
                    min: 0,
                    max: 150,
                    padding: 15
                },
                gridLines: false,
                id: 'B',
                type: 'linear',
                position: 'right',
                scaleLabel: {
                    display: true,
                    fontColor: chartColors.InsulinLevel,
                    labelString: 'Insulin (μU/mL)'
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