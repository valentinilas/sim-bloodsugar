import { el_startSimButton } from '../elements/start-sim-button';
import store from '../store/store';
import { updateBloodSugarChart } from '../methods/update-blood-sugar-chart';
import { updateInsulinChart } from '../methods/update-insulin-chart';
import testTypes from '../enums/enum.test-types';

export const attachRunSimulationEvent = () => {
    console.log()
    el_startSimButton.addEventListener('click', (e) => {
        if (store.testType === testTypes.BloodTest) {
            updateBloodSugarChart(store.bloodSugarChart, store.selectedPersonType, store.selectedFood, store.fitnessType);

        } else if (store.testType === testTypes.InsulinTest) {
            updateInsulinChart(store.insulinChart, store.selectedPersonType, store.selectedFood, store.fitnessType);

        }
    });
}