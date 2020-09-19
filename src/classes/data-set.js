import foodLabels from '../enums/enum.food-labels';

export default class dataSetClass {
    constructor(data) {
        this.data = data;
        this.InsulinModifier = 7.5;
    }


    get timeScale() {
        return this.data.map(entry => {
            return entry.time;
        })
    }
    get[foodLabels.Rice]() {
        return this.data.map(entry => {
            return entry.rice;
        })
    }
    get[foodLabels.Rice + 'InsulinLevel']() {
        var initial = this[foodLabels.Rice];
        return initial.map(val => {
            return Number((val * this.InsulinModifier).toFixed(2));
        })
    }
    get[foodLabels.Cola]() {
        return this.data.map(entry => {
            return entry.cola;
        })
    }
    get[foodLabels.Cola + 'InsulinLevel']() {
        var initial = this[foodLabels.Cola];
        return initial.map(val => {
            return Number((val * this.InsulinModifier).toFixed(2));
        })
    }
    get[foodLabels.Bread]() {
        return this.data.map(entry => {
            return entry.bread;
        })
    }
    get[foodLabels.Bread + 'InsulinLevel']() {
        var initial = this[foodLabels.Bread];
        return initial.map(val => {
            return Number((val * this.InsulinModifier).toFixed(2));
        })
    }
    get[foodLabels.Glucose]() {
        return this.data.map(entry => {
            return entry.glucose;
        })
    }
    get[foodLabels.Glucose + 'InsulinLevel']() {
        var initial = this[foodLabels.Glucose];
        return initial.map(val => {
            return Number((val * this.InsulinModifier).toFixed(2));
        })
    }
}