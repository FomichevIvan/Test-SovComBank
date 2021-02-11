import { ADD_WORD, LIKE_WORD } from "./actionTypes";

export const wordReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_WORD:
      return [...state, action.payload]
    
      case LIKE_WORD: 
      
      return [
        ...state.map(word => {
          if(word.id !== action.payload) {
            return word
          }return {
            ...word, 
            isLiked: !word.isLiked
          }
        })
      ]
      


    default:
      return state
  }

}
