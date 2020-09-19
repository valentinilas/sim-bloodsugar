import foodTypes from '../enums/enum.food-labels';
import chartColors from '../enums/enum.chart-colors';
import store from '../store/store';


// updateBloodSugarChart(store.bloodSugarChart, store.selectedPersonType, store.selectedFood, store.fitnessType);
export const updateBloodSugarChart = (chart, data, foodType, fitnessModifier) => {
    let fitnessMod = undefined;

    if (fitnessModifier) {
        fitnessMod = data[foodType].map(entry => {
            return entry + store.fitnessModifier;
        })
    }
    chart.data = {
            labels: data.timeScale,
            datasets: [{
                    data: fitnessMod || data[foodType],
                    label: foodTypes[foodType],
                    borderColor: chartColors[foodType],
                    backgroundColor: chartColors[foodType],
                    fill: true
                }

            ]
        },
        chart.update();
}