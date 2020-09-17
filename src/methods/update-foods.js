export const updateFoodsChart = (chart, foodType, newValue) => {

    chart.getDatasetMeta(foodType).hidden = !newValue

    chart.update();
}