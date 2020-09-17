import normalPersonData from '../data/person-normal';
import diabeticPersonData from '../data/person-diabetic';
import dataSetClass from '../classes/data-set';

var normalPerson = new dataSetClass(normalPersonData);
var diabeticPerson = new dataSetClass(diabeticPersonData);

export default {
    normalPerson: normalPerson,
    diabeticPerson: diabeticPerson,
    bloodSugarChart: undefined
}