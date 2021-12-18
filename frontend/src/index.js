import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import reducers from './app/config/reducers'
import StoreOrAdmin from './app/StoreOrAdmin'
import reportWebVitals from './reportWebVitals'
import serviceWorker from './serviceWorker'

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)
ReactDOM.render(
  <Provider store={store}>
        <StoreOrAdmin />
    </Provider>,
  document.getElementById('root')
)
serviceWorker()
reportWebVitals()