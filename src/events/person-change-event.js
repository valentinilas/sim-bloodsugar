import { el_personSelector } from '../elements/person-selector';
import personTypes from '../enums/enum.person-type';
import { updateChart } from '../methods/update-chart';
import store from '../store/store';

export const attachPersonSelectorEvents = () => {
    el_personSelector.addEventListener('change', (e) => {
        let val = e.target.value;
        if (val === personTypes.Normal) {
            updateChart(store.bloodSugarChart, store.normalPerson);
        } else if (val === personTypes.Diabetic) {
            updateChart(store.bloodSugarChart, store.diabeticPerson);
        }
    });
}