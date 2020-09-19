import { Droppable } from '@shopify/draggable';
import store from '../store/store';
import { updateBloodSugarChart } from '../methods/update-blood-sugar-chart';
import { updateInsulinChart } from '../methods/update-insulin-chart';

const droppable = new Droppable(document.querySelectorAll('#app'), {
    draggable: '.item',
    dropzone: '.dropzone'
});

export const attachDraggableEvents = () => {
    droppable.on('droppable:dropped', (e) => {
        let foodType = e.data.dragEvent.data.originalSource.getAttribute('data-value');
        store.setSelectedFood = foodType;
        updateBloodSugarChart(store.bloodSugarChart, store.selectedPersonType, store.selectedFood, store.fitnessType);
        updateInsulinChart(store.insulinChart, store.selectedPersonType, store.selectedFood, store.fitnessType);
    });
    droppable.on('droppable:returned', (e) => {
        console.log(e);
        console.log('droppable:returned');
    });
}