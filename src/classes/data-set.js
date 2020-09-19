import foodLabels from '../enums/enum.food-labels';
import store from '../store/store'
export default class dataSetClass {
    constructor(data) {
        this.data = data;
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

    get[foodLabels.Cola]() {
        return this.data.map(entry => {
            return entry.cola;
        })
    }

    get[foodLabels.Bread]() {
        return this.data.map(entry => {
            return entry.bread;
        })
    }

    get[foodLabels.Glucose]() {
        return this.data.map(entry => {
            return entry.glucose;
        })
    }

}