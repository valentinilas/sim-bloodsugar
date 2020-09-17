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
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                fontColor: '#fff',
            },
            scaleLabel: {
                display: true,
                fontColor: '#fff',
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