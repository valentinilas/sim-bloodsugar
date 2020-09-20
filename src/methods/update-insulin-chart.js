import foodTypes from '../enums/enum.food-labels';
import chartColors from '../enums/enum.chart-colors';
import insulinTypes from '../enums/enum.insulin-types'
import store from '../store/store';
import { toggleControls } from '../methods/toggle-controls';


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

    let bloodSugarLevels = bloodSugarfitnessMod || data[foodType];


    chart.data = {
            labels: data.timeScale,
            datasets: [{
                    // data: bloodSugarLevels,
                    data: [],
                    label: foodTypes[foodType + 'BloodLevel'],
                    borderColor: chartColors[foodType],
                    backgroundColor: chartColors[foodType],
                    fill: true,
                    yAxisID: 'A'
                },
                {
                    // data: insulinLevels,
                    data: [],
                    label: insulinTypes.levelLabel,
                    borderColor: chartColors.InsulinLevel,
                    backgroundColor: chartColors.InsulinLevel,
                    fill: true,
                    yAxisID: 'B'
                }

            ]
        },
        chart.update();

    // sim
    clearInterval(window.runSimBInterval);
    window.runSimBInterval = setInterval(runSimB, 200);
    toggleControls(false);

    function runSimB() {

        // update insulin levels
        let insulinDatapoint = insulinLevels[chart.config.data.datasets[1].data.length % insulinLevels.length];
        chart.config.data.datasets[1].data.push(insulinDatapoint);

        // update bloodsugar levels
        let bloodSugarDataPoint = bloodSugarLevels[chart.config.data.datasets[0].data.length % bloodSugarLevels.length];
        chart.config.data.datasets[0].data.push(bloodSugarDataPoint);


        if (insulinLevels.length === chart.config.data.datasets[1].data.length) {
            clearInterval(window.runSimBInterval);
            toggleControls(true);
        }

        chart.update();

    }


}