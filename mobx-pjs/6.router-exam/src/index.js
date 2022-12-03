import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
    {/* browserRouter로 root에 그릴컴포넌트를 브라우저라우터로 감싸줌으로서
  App 밑에있는 어떤 컴포넌트라도 라우팅을 진행할 수 있다. */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
