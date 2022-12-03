import { observable, action, makeObservable } from 'mobx';

class CounterStore {

    constructor() {
        makeObservable(this);
    }

    // observable로 덮어주면, 이 count는 특정 observer가 바라보는 state 객체가 되는것 
    @observable
    _count = 5

    get count() {
        return this._count;
    }

    @action
    increment() {
        this._count++;
    }
    @action
    decrement() {
        this._count--;
    }
}

export default new CounterStore();