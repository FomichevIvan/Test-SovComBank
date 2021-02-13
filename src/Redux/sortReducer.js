
import {SORT_WORD} from './actionTypes'


export const sortReducer = (state=[], action) => {
  switch (action.type) {
    case SORT_WORD:
      console.log(state, 'reducer');
      return [...state, ...action.payload]
      
     
  
    default:
     return state
  }
}
