import foodTypes from '../enums/enum.food-labels';
import chartColors from '../enums/enum.chart-colors';
import insulinTypes from '../enums/enum.insulin-types'

export const updateInsulinChart = (chart, data, foodType) => {
    chart.data = {
            labels: data.timeScale,
            datasets: [{
                    data: data[foodType],
                    label: foodTypes[foodType + 'BloodLevel'],
                    borderColor: chartColors[foodType],
                    // backgroundColor: chartColors.Rice,
                    fill: true
                },
                {
                    data: data[foodType + insulinTypes.level],
                    label: insulinTypes.levelLabel,
                    borderColor: chartColors.InsulinLevel,
                    // backgroundColor: chartColors.Rice,
                    fill: true,
                }

            ]
        },
        chart.update();
}