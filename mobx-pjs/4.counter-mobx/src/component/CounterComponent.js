import React, { Component } from 'react';
import { Button, Box } from '@material-ui/core';

import { inject, observer } from 'mobx-react';

@inject('counterStore')
@observer
class CounterComponent extends Component {
  // couterComponent에 State를 직접 사용하지않고, 카운터 스토어에서 Observable한 State 데이터 정의하였음
  render() {
    // props에 CounterStore 가 주입되어있기 때문에 사용 가능
    // inject된 counterStore는 props에서 꺼내야한다
    const { counterStore } = this.props;
    return (
      <div>
        <Button
          onClick={() => counterStore.decrement()}
          variant='contained' color='primary' size='large'> - </Button>

        <Box component='span' m={5}> {counterStore.count} </Box>
        {/* 변수에 접근하듯이 접근하면됨. get메소드로 만들어주었기떄문 */}
        <Button
          onClick={() => counterStore.increment()}
          variant='contained' color='primary' size='large'> + </Button>
      </div>
    )
  }
}

export default CounterComponent;