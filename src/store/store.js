import normalPersonData from '../data/person-normal';
import diabeticPersonData from '../data/person-diabetic';
import dataSetClass from '../classes/data-set';
import foodTypes from '../enums/enum.food-labels';

var normalPerson = new dataSetClass(normalPersonData);
var diabeticPerson = new dataSetClass(diabeticPersonData);

export default {
    normalPerson: normalPerson,
    diabeticPerson: diabeticPerson,
    bloodSugarChart: undefined,
    insulinChart: undefined,
    fitnessType: false,
    selectedFood: foodTypes.Cola,
    selectedPersonType: normalPerson,
    fitnessModifier: 1,
    insulinModifier: 7.5,

    set setPersonType(personType) {
        this.selectedPersonType = personType;
    },
    set setSelectedFood(foodType) {
        this.selectedFood = foodType;
    },

    set setFitnessType(val) {
        this.fitnessType = val
    }
}