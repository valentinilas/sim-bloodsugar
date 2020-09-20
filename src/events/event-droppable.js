import { Droppable } from '@shopify/draggable';
import store from '../store/store';

import { setTestTypeOnGraphContainer } from '../methods/set-test-type-on-graph-element';
import { resetChartData } from '../methods/reset-chart-data';



export const attachDraggableEvents = () => {
    const droppable = new Droppable(document.querySelectorAll('.draggable-menu__foods, .draggable-menu__tests, .dropzone-container'), {
        draggable: '.item',
        dropzone: '.dropzone'
    });

    let droppableOrigin;

    droppable.on('drag:start', (evt) => {
        droppableOrigin = evt.originalSource.parentNode.dataset.dropzone;
    });

    droppable.on('droppable:dropped', (evt) => {
        if (droppableOrigin !== evt.dropzone.dataset.dropzone) {
            evt.cancel();
            return;
        }


        let foodType = evt.data.dragEvent.data.originalSource.getAttribute('data-food');
        let testType = evt.data.dragEvent.data.originalSource.getAttribute('data-test');
        if (foodType !== null && foodType !== '') {
            store.setSelectedFood = foodType;
            resetChartData();
        }
        if (testType !== null && testType !== '') {
            store.setTestType = testType;
            resetChartData();
            setTestTypeOnGraphContainer(testType);
        }




    });






    // --- Draggable events --- //



}