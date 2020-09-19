import { el_fitnessSelector } from '../elements/fitness-selector';
import fitnessTypes from '../enums/enum.person-fitness';

export const toggleFitnessControls = (val) => {
    let inputs = el_fitnessSelector.querySelectorAll('input');
    [].forEach.call(inputs, input => {
        input.disabled = !val;
        if (!val && input.value === fitnessTypes.NotFit) {
            input.checked = !val;
        }
    })


}