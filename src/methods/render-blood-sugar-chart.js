import Chart from 'chart.js';

import bloodSugarChartOptions from '../config/bloodsugar-chart-options';
import chartColors from '../enums/enum.chart-colors';
import foodTypes from '../enums/enum.food-labels';
import store from '../store/store';

/**
 * 
 * @param {Element} ctx 
 * @param {Array} data
 * Example Data
 * [{time,}] 
 */
export const renderBloodSugarChart = (ctx, data, foodType) => {
    ctx.style.backgroundColor = '#34434b';

    var chart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: data.timeScale,
            fontColor: "#fff",
            datasets: [{
                    // data: data[foodType],
                    data: [],
                    label: foodTypes[foodType + 'BloodLevel'],
                    borderColor: chartColors[foodType],
                    backgroundColor: chartColors[foodType],
                    fill: true
                }

            ]
        },
        options: bloodSugarChartOptions
    });

    console.log(chart.data);

    store.bloodSugarChart = chart;
};