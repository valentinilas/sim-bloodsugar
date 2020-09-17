export default class dataSetClass {
    constructor(data) {
        this.data = data;
    }

    get timeScale() {
        return this.data.map(entry => {
            return entry.time;
        })
    }
    get riceValues() {
        return this.data.map(entry => {
            return entry.rice;
        })
    }
    get colaValues() {
        return this.data.map(entry => {
            return entry.cola;
        })
    }
    get breadValues() {
        return this.data.map(entry => {
            return entry.bread;
        })
    }
    get glucoseValues() {
        return this.data.map(entry => {
            return entry.glucose;
        })
    }
}