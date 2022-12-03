import React, { Component } from 'react';
import TodoEditFormView from '../views/TodoEditFormView';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import generateId from '../IDGenerator'
@inject('todoStore')
@autobind
@observer // 2개의 데코레이터 적용. -> todoStore 사용 가능
class TodoEditFormContainer extends Component {

  onSetTodoProps(name, value) {
    this.props.todoStore.setTodoProps(name, value); // todostore가
    // 가지고있는 setTodoProps 메소드를 호출하는 onSetTodoProps를 만들어
    // TodoEditFormView에다 전달해주는것
  }

  onAddTodo() {
    let { todo } = this.props.todoStore;
    todo = { ...todo, id: generateId(5) } //기존에todo 에있는걸 넣고id 추가
    this.props.todoStore.addTodo(todo); // todos에 하나의 todo 객체가 들어감
  }

  onUpdateTodo() {
    this.props.todoStore.updateTodo();
  }
  onRemoveTodo() {
    this.props.todoStore.removeTodo();
  }

  render() {

    const { todoStore } = this.props;
    return (
      <TodoEditFormView
        todo={todoStore.todo}
        onSetTodoProps={this.onSetTodoProps}  // @autobind를 써주었기떄문에 클래스내에서 일어나는 bind는 신경쓰지않아도됨
        onAddTodo={this.onAddTodo}
        onUpdateTodo={this.onUpdateTodo}
        onRemoveTodo={this.onRemoveTodo}
      />
      // get todo()를 가져와서 props로 전달해주는것 
    )
  }
}

export default TodoEditFormContainer;