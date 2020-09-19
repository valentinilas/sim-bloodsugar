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
                    data: data[foodType],
                    label: foodTypes[foodType + 'BloodLevel'],
                    borderColor: chartColors[foodType],
                    // backgroundColor: chartColors.Rice,
                    fill: true,
                    // pointRadius: 0,
                },
                {
                    data: insulinLevels,
                    label: insulinTypes.levelLabel,
                    borderColor: chartColors.InsulinLevel,
                    // backgroundColor: chartColors.Rice,
                    fill: true,
                }

            ]
        },
        options: insulinChartOptions
    });


    store.insulinChart = chart;
};