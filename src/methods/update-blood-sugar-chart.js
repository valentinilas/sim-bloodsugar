import foodTypes from '../enums/enum.food-labels';
import chartColors from '../enums/enum.chart-colors';

export const updateBloodSugarChart = (chart, data, foodType) => {
    chart.data = {
            labels: data.timeScale,
            datasets: [{
                    data: data[foodType],
                    label: foodTypes[foodType],
                    borderColor: chartColors[foodType],
                    // backgroundColor: chartColors.Rice,
                    fill: true
                }

            ]
        },
        chart.update();
}