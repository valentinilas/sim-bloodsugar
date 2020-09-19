import { el_foodTypeSelector } from '../elements/food-type-selector';
import { updateBloodSugarChart } from '../methods/update-blood-sugar-chart';
import { updateInsulinChart } from '../methods/update-insulin-chart';
import store from '../store/store';

export const attachFoodTypeSelectorEvents = () => {
    el_foodTypeSelector.addEventListener('change', (e) => {
        let foodType = e.target.getAttribute('data-name');
        store.selectedFood = foodType;
        // updateBloodSugarChart(store.bloodSugarChart, store.selectedPersonType, foodType, store.fitnessType);
        // updateInsulinChart(store.insulinChart, store.selectedPersonType, foodType, store.fitnessType);
    });
}