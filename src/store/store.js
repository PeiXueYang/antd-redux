import {createStore,compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import totalReducers from './reducers'
const store = createStore(
	totalReducers,
	compose(
    applyMiddleware(...[thunk]), // 需要使用的中间件数组
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
	)
	store.dispatch({
		type:'EDIT',
		payload:'hahha'
	})
	

export default store;
