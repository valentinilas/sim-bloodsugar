import normalPersonData from '../data/person-normal';
import diabeticPersonData from '../data/person-diabetic';
import dataSetClass from '../classes/data-set';
import foodTypes from '../enums/enum.food-labels';

var normalPerson = new dataSetClass(normalPersonData);
var diabeticPerson = new dataSetClass(diabeticPersonData);
console.log(normalPerson);

export default {
    normalPerson: normalPerson,
    diabeticPerson: diabeticPerson,
    bloodSugarChart: undefined,
    insulinChart: undefined,
    fitPerson: true,
    selectedFood: foodTypes.Cola,
    selectedPersonType: normalPerson,

    set setPersonType(personType) {
        this.selectedPersonType = personType;
    },

    set setFitnessType(val) {
        this.fitPerson = val
    }
}