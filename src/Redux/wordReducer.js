import { ADD_WORD, LIKE_WORD, PARTS_OF_SPEECH, SORT_WORD } from "./actionTypes";

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

      // case SORT_WORD: 
      // const arr = []// массив слов, которые необходимо отрендерить
      // const isLikedWords = state.filter(word => word.isLiked)// оставляем только избранные слова
      // // console.log(isLikedWords);
      // if(action.payload.length) {// проверяем, есть ли в массиве выбранные чекбоксы
      //   for ( let i = 0; i < action.payload.length; i++) {// бежим по массиву чекбоксов
      //     arr.push(isLikedWords.filter(w => w.partOfSpeech === action.payload[i]))//пушим найденные элементы на каждой итерации
  
      //   }
      //   return [...arr]// возвращаем массив для рендеринга
      // }else return [...isLikedWords]// иначе массив избранного


      // case PARTS_OF_SPEECH: 
      // const arr = []// массив слов, которые необходимо отрендерить
      // // const isLikedWords = state.filter(word => word.isLiked)// оставляем только избранные слова
      // // console.log(isLikedWords);
      // if(action.payload.length) {// проверяем, есть ли в массиве выбранные чекбоксы
      //   for ( let i = 0; i < action.payload.length; i++) {// бежим по массиву чекбоксов
      //     arr.push(...state.filter(w => w.partOfSpeech === action.payload[i]))//пушим найденные элементы на каждой итерации
  
      //   }
      //   return [arr]// возвращаем массив для рендеринга
      // }else 
      // console.log(state);
      // return [...state.filter(el=> el.isLiked)]// иначе массив избранного
      
      


    default:
      return state
  }

}
