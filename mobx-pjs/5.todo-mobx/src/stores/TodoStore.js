import { observable, action, computed, makeObservable } from 'mobx';

class TodoStore {

    constructor() {
        makeObservable(this);
    }

    @observable
    _todo = {}   // id, title, date    

    @observable
    _todos = [];

    @observable
    _searchText = "";

    get todo() {    // get 메소드 사용 
        return this._todo;
    }

    @computed
    get todos() {
        return this._todos;
    }

    @computed
    get searchText() {
        return this._searchText;
    }

    @action // observable 데이터를 변경할때에는 @action 데코레이터 사용
    setTodoProps(name, value) {
        this._todo = {
            ...this._todo,
            [name]: value
        }
    }

    @action
    setSearchText(searchText) {
        this._searchText = searchText;
    }

    @action
    addTodo(todo) {     // todos에 데이터를 추가하기위한 메소드
        this.todos.push(todo);
    }

    @action // _todo를 변경하는 메소드기때문에 action메소드
    selectedTodo(todo) {    //_todo에 assign해서 집어넣으면 input form에 내용이바뀐다
        this._todo = todo;
    }

    @action
    updateTodo() {
        let foundTodo = this._todos.find((todo) => todo.id === this._todo.id);
        foundTodo.title = this._todo.title;
        foundTodo.date = this._todo.date;

        this._todo = {};
    }
    @action
    removeTodo() {
        let index = this._todos.findIndex(todo => todo.id === this._todo.id);
        if (index > -1) {
            this._todos.splice(index, 1);
        }
        this._todo = {};
    }
}


export default new TodoStore();