import thunk from 'redux-thunk'
//4. создаем и вывозим стор

import {wordReducer} from './wordReducer'
import {errReducer} from  './errorReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { applyMiddleware, createStore, compose, combineReducers } from 'redux'


  
export const store = createStore(combineReducers({words: wordReducer, errors: errReducer}), compose(applyMiddleware(thunk), composeWithDevTools()))
