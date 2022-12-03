import React, { Component } from 'react';
import TodoListView from '../views/TodoListView';

import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';

@inject('todoStore')
@autobind
@observer
class TodoListContainer extends Component {

  onSelectedTodo(todo) {
    this.props.todoStore.selectedTodo(todo);
  }

  render() {

    let { todos, searchText } = this.props.todoStore;
    // 일치하는 문자열이 존재하는 todo값들로 배열을 다시 만들어줌
    todos = todos.filter((todo) => todo.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);

    return (
      <TodoListView
        todos={todos}
        onSelectedTodo={this.onSelectedTodo}
      />
    )
  }
}

export default TodoListContainer;