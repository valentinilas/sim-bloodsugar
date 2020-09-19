import { el_fitnessSelector } from '../elements/fitness-selector';
import fitnessTypes from '../enums/enum.person-fitness';
import { updateBloodSugarChart } from '../methods/update-blood-sugar-chart';
import { updateInsulinChart } from '../methods/update-insulin-chart';
import store from '../store/store';

export const attachFitnessTypeSelectorEvents = () => {

    el_fitnessSelector.addEventListener('change', (e) => {
        let fitnessType = e.target.value;
        if (fitnessType === fitnessTypes.Fit) {
            store.setFitnessType = true;

        } else if (fitnessType === fitnessTypes.NotFit) {
            store.setFitnessType = false;
        }

        // updateBloodSugarChart(store.bloodSugarChart, store.selectedPersonType, store.selectedFood, store.fitnessType);
        // updateInsulinChart(store.insulinChart, store.selectedPersonType, store.selectedFood, store.fitnessType);
    });
}