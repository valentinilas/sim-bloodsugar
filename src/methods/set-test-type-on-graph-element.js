import { el_chartsContainer } from '../elements/charts-container';

export const setTestTypeOnGraphContainer = (val) => {
    el_chartsContainer.setAttribute('data-test', val);
}