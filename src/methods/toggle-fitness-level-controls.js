import { el_fitnessSelector } from '../elements/fitness-selector';
import store from '../store/store';

export const toggleFitnessControls = (val) => {
    let inputs = el_fitnessSelector.querySelectorAll('input');
    [].forEach.call(inputs, input => {
        input.disabled = !val;
    })


}