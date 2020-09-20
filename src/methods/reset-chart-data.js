import store from '../store/store';


export const resetChartData = () => {

    store.resetChartData = [];
    store.insulinChart.update();
    store.bloodSugarChart.update();
}