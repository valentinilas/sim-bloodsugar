import './styles/main.scss'
import { renderBloodSugarChart } from './methods/render-blood-sugar-chart';
import { rederInsulinChart } from './methods/render-insulin-chart';
import store from './store/store';
import { attachPersonSelectorEvents } from './events/event-person-type-change';
import { attachFoodTypeSelectorEvents } from './events/event-food-type-change';
// import foodTypes from './enums/enum.food-labels';

var chartBloodSugar = document.getElementById('chart-blood-sugar');
var chartInsulin = document.getElementById('chart-insulin');

renderBloodSugarChart(chartBloodSugar, store.normalPerson, store.selectedFood);
rederInsulinChart(chartInsulin, store.normalPerson, store.selectedFood);

attachPersonSelectorEvents();
attachFoodTypeSelectorEvents();