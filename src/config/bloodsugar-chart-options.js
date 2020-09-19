import chartColors from '../enums/enum.chart-colors';

export default {
    responsive: true,
    title: {
        display: true,
        fontColor: '#fff',
        position: 'top',
        text: 'Blodsukkerindhold'
    },
    legend: {
        position: 'bottom',
        // align: 'start',
        display: false,

        labels: {
            fontColor: '#fff',
            boxWidth: 10,
            usePointStyle: true
        }
    },
    layout: {
        padding: {
            left: 10,
            right: 20,
            top: 10,
            bottom: 10
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                fontColor: '#fff',
                stepSize: 5,
                min: 0,
                max: 20,
            },
            scaleLabel: {
                display: true,
                fontColor: chartColors.BloodSugarLevel,
                labelString: 'Blodsukker (mMol/L)'
            }
        }],
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