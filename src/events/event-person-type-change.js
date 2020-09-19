import { el_personSelector } from '../elements/person-selector';
import personTypes from '../enums/enum.person-type';
import { updateBloodSugarChart } from '../methods/update-blood-sugar-chart';
import { updateInsulinChart } from '../methods/update-insulin-chart';
import { toggleFitnessControls } from '../methods/toggle-fitness-level-controls';
import store from '../store/store';

export const attachPersonSelectorEvents = () => {
    el_personSelector.addEventListener('change', (e) => {
        let val = e.target.value;
        console.log(val);
        if (val === personTypes.Normal) {
            updateBloodSugarChart(store.bloodSugarChart, store.normalPerson, store.selectedFood);
            updateInsulinChart(store.insulinChart, store.normalPerson, store.selectedFood);
            store.setPersonType = store.normalPerson;
            toggleFitnessControls(true);
            store.setFitnessType = true;

        } else if (val === personTypes.Diabetic) {
            toggleFitnessControls(false);
            store.setFitnessType = false;


            updateBloodSugarChart(store.bloodSugarChart, store.diabeticPerson, store.selectedFood);
            updateInsulinChart(store.insulinChart, store.diabeticPerson, store.selectedFood);
            store.setPersonType = store.diabeticPerson;
        }
    });
}