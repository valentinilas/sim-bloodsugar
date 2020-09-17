import './styles/main.scss'
import { renderChart } from './methods/render-chart';
import store from './store/store';
import { attachPersonSelectorEvents } from './events/person-change-event';
import { attachFoodTypeSelectorEvents } from './events/food-type-change-event';

var ctx = document.getElementById('bloodsugar');

renderChart(ctx, store.normalPerson);

attachPersonSelectorEvents();
attachFoodTypeSelectorEvents();