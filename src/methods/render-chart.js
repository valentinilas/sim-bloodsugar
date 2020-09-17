import Chart from 'chart.js';

import bloodSugarChartOptions from '../config/bloodsugar-chart-options';
import chartColors from '../enums/enum.chart-colors';
import bloodSugarLabels from '../enums/enum.bloodsugar-labels';
import store from '../store/store';

export const renderChart = (ctx, data) => {
    ctx.style.backgroundColor = '#34434b';

    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.timeScale,
            fontColor: "#fff",
            datasets: [{
                    data: data.riceValues,
                    label: bloodSugarLabels.Rice,
                    borderColor: chartColors.Rice,
                    // backgroundColor: chartColors.Rice,
                    fill: true
                },
                {
                    data: data.colaValues,
                    label: bloodSugarLabels.Cola,
                    borderColor: chartColors.Cola,
                    // backgroundColor: chartColors.Cola,
                    fill: true
                },
                {
                    data: data.breadValues,
                    label: bloodSugarLabels.Bread,
                    borderColor: chartColors.Bread,
                    // backgroundColor: chartColors.Bread,
                    fill: true
                },
                {
                    data: data.glucoseValues,
                    label: bloodSugarLabels.Glucose,
                    borderColor: chartColors.Glucose,
                    // backgroundColor: chartColors.Glucose,
                    fill: true
                }
            ]
        },
        options: bloodSugarChartOptions
    });

    store.bloodSugarChart = chart;
};