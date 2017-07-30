import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { numbers } from './reducers/numbers'
import App from './App'


let store = createStore(numbers)


ReactDOM.render(
  
  <Provider store={store}>
   <App/>
  </Provider>
,
  document.getElementById('root')
)