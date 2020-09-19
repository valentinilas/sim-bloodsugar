import foodTypes from '../enums/enum.food-labels';
import chartColors from '../enums/enum.chart-colors';
import store from '../store/store';
import { toggleControls } from '../methods/toggle-controls';

// updateBloodSugarChart(store.bloodSugarChart, store.selectedPersonType, store.selectedFood, store.fitnessType);
export const updateBloodSugarChart = (chart, data, foodType, fitnessModifier) => {
    let fitnessMod = undefined;

    if (fitnessModifier) {
        fitnessMod = data[foodType].map(entry => {
            return entry + store.fitnessModifier;
        })
    }
    let dataPoints = fitnessMod || data[foodType];

    chart.data = {
            labels: data.timeScale,
            datasets: [{
                    data: [dataPoints[0]],
                    label: foodTypes[foodType],
                    borderColor: chartColors[foodType],
                    backgroundColor: chartColors[foodType],
                    fill: true
                }

            ]
        },
        chart.update();
    clearInterval(window.runSimInterval);
    window.runSimInterval = setInterval(runSim, 200);
    toggleControls(false);

    function runSim() {


        var datapoint = dataPoints[chart.config.data.datasets[0].data.length % dataPoints.length];

        chart.config.data.datasets[0].data.push(datapoint);

        console.log(dataPoints);
        chart.update();
        if (dataPoints.length === chart.config.data.datasets[0].data.length) {
            clearInterval(window.runSimInterval);
            toggleControls(true);
        }

    }


}

// var output = $('h1');
// var isPaused = false;
// var time = 0;
// var t = window.setInterval(function() {
//   if(!isPaused) {
//     time++;
//     output.text("Seconds: " + time);
//   }
// },