import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'mobx-react';
import CounterStore from './store/CounterStore'
// 이 Provider는 Mobx 랑 React를 연결해주는 Provider라고 생각하면된다.
// 스토어의 state를 사용하기위해선 프로바이더 사용 필수
// Provider에 props 형식으로 제공해주면, 이 App 하위에 있는 모든 컴퍼넌트들은 이 counterStore를 사용가능
ReactDOM.render(
  <Provider counterStore={CounterStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
