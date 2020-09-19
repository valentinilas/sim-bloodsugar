import foodTypes from '../enums/enum.food-labels';
import chartColors from '../enums/enum.chart-colors';
import insulinTypes from '../enums/enum.insulin-types'
import store from '../store/store';

export const updateInsulinChart = (chart, data, foodType, fit) => {
    let bloodSugarfitnessMod = undefined;

    let insulinLevels = data[foodType].map(entry => {
        return Number((entry * store.insulinModifier).toFixed(2));
    });


    if (fit) {
        bloodSugarfitnessMod = data[foodType].map(entry => {
            return (entry + store.fitnessModifier);
        })

        insulinLevels = data[foodType].map(entry => {
            return ((entry + store.fitnessModifier) * store.insulinModifier);
        })

    }


    chart.data = {
            labels: data.timeScale,
            datasets: [{
                    data: bloodSugarfitnessMod || data[foodType],
                    label: foodTypes[foodType + 'BloodLevel'],
                    borderColor: chartColors[foodType],
                    backgroundColor: chartColors[foodType],
                    fill: true
                },
                {
                    data: insulinLevels,
                    label: insulinTypes.levelLabel,
                    borderColor: chartColors.InsulinLevel,
                    backgroundColor: chartColors.InsulinLevel,
                    fill: true,
                }

            ]
        },
        chart.update();
}