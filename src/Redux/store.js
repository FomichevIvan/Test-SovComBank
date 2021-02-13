import thunk from 'redux-thunk'
import logger from 'redux-logger'
//4. создаем и вывозим стор

import {wordReducer} from './wordReducer'
import {errReducer} from  './errorReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import { sortReducer } from './sortReducer'

  
export const store = createStore(combineReducers({words: wordReducer, errors: errReducer, sort: sortReducer}), compose(applyMiddleware(thunk), composeWithDevTools()))
