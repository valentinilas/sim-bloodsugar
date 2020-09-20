import Chart from 'chart.js';
import insulinTypes from '../enums/enum.insulin-types'

import insulinChartOptions from '../config/insulin-chart-options';
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
export const rederInsulinChart = (ctx, data, foodType) => {
    ctx.style.backgroundColor = '#34434b';


    let insulinLevels = data[foodType].map(entry => {
        return Number((entry * store.insulinModifier).toFixed(2));
    });




    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.timeScale,
            fontColor: "#fff",
            datasets: [{
                    // data: data[foodType],
                    data: [], //initial load
                    label: foodTypes[foodType + 'BloodLevel'],
                    borderColor: chartColors[foodType],
                    backgroundColor: chartColors[foodType],
                    fill: true,
                    yAxisID: 'A'
                        // pointRadius: 0,
                },
                {
                    // data: insulinLevels,
                    data: [], //initial load
                    label: insulinTypes.levelLabel,
                    borderColor: chartColors.InsulinLevel,
                    backgroundColor: chartColors.InsulinLevel,
                    fill: true,
                    yAxisID: 'B'
                }

            ]
        },
        options: insulinChartOptions
    });


    store.insulinChart = chart;
};