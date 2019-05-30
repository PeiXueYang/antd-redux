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

let initState = {
	 userList:[{
			userName:"peipei",
			phone:'18888880000',
			email:'123@123.com',
			address:'上海市',
	 }]
}

const addUserReducer = (state =initState,action )=>{
		
	  if(action.type === 'ADD_USER'){
			state.userList.push(action.payload)
			 return  state

		}
		return state
}

const totalReducers = combineReducers({
			item:postListReducer,
			counter:counterReducer,
			comments:getComments,
			userList:addUserReducer,
	})
export default totalReducers;
