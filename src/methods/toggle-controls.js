import { el_controlsBlocks } from '../elements/control-blocks';

export const toggleControls = (val) => {
    if (val) {
        [].forEach.call(el_controlsBlocks, (block) => {
            block.classList.remove('disabled');
        })
    } else {
        [].forEach.call(el_controlsBlocks, (block) => {
            block.classList.add('disabled');
        })
    }
}