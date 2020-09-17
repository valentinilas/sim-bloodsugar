import bloodSugarLabels from '../enums/enum.bloodsugar-labels';
import chartColors from '../enums/enum.chart-colors';

export const updateChart = (chart, data) => {
    chart.data = {
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
        chart.update();
}