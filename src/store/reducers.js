import {combineReducers} from 'redux'
const counterReducer = function(state={
	counter:1,num:2,list:[{
		title:'hello react'
	}]
},action){
	switch(action.type){
   case 'COUNTER_ADD':
		 return {...state,counter:state.counter+1}
		 default:
		   return state
	}
}
const postListReducer = (state={
	item:null
},
action)=>{
		switch(action.type){
			case 'EDIT':
				return {...state,item:action.payload}
				default:
					return state
		 }
}
const getComments = (state={
  comments:null
},action)=>{
	switch(action.type){
		case 'success':
			return {...state,comments:action.payload}
			default:
				return state
	 }
}
const totalReducers = combineReducers({item:postListReducer,counter:counterReducer,comments:getComments})
export default totalReducers;
