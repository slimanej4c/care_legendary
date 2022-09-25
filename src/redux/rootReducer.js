import { combineReducers } from 'redux'


//import RegisterReducer from './Register/register_redux'

import ChangeVarReducer from './var_redux'
console.log('rootReducer')
const rootReducer = combineReducers({
   // Register_redux :RegisterReducer,
   change_var_reducer:ChangeVarReducer,

    
})

export default rootReducer