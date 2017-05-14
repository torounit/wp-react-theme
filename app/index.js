import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from './reducers'

import App from './components/App'
const store = createStore(reducers);
const container = document.querySelector('#app');
const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<Component/>
			</Provider>
		</AppContainer>,
		container
	);
};

render(App);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/App', () => {
		render(App)
	});
}
