import { el_foodTypeSelector } from '../elements/food-type-selector';
import { updateFoodsChart } from '../methods/update-foods';
import store from '../store/store';

export const attachFoodTypeSelectorEvents = () => {
    el_foodTypeSelector.addEventListener('change', (e) => {
        let val = e.target.value;
        let checked = e.target.checked;


        updateFoodsChart(store.bloodSugarChart, val, checked);



    });
}