import React, { Component } from 'react';
import { Button, List, ListItemText } from '@material-ui/core';
import axios from 'axios';

class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [{
        id: '',
        name: ''
      }],
    }
  }

  loadUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({
          users: response.data
        });
      });
  }
  // lifecycle 메소드
  componentDidMount() { // 특정데이터들이 셋팅되어야 할 때
    this.loadUsers();
    // 컴포넌트들이 마운트가 된 이후에 componentdidMount가 호출되서, 데이터가져와서 세팅
  }

  render() {

    const usersList = this.state.users.map(user => {
      return <ListItemText primary={user.name} key={user.id} />
    })

    return (
      <div>
        {/* <Button onClick={this.loadUsers.bind(this)} variant='contained' color='primary'>Load</Button> */}
        <List>
          {usersList}
        </List>
      </div>

    )
  }
}

export default UserList;