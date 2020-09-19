import { el_startSimButton } from '../elements/start-sim-button';
import store from '../store/store';
import { updateBloodSugarChart } from '../methods/update-blood-sugar-chart';
import { updateInsulinChart } from '../methods/update-insulin-chart';

export const attachRunSimulationEvent = () => {
    el_startSimButton.addEventListener('click', (e) => {
        console.log(store);
        updateBloodSugarChart(store.bloodSugarChart, store.selectedPersonType, store.selectedFood, store.fitnessType);
        updateInsulinChart(store.insulinChart, store.selectedPersonType, store.selectedFood, store.fitnessType);
    });
}