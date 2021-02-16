import thunk from "redux-thunk";
//4. создаем и вывозим стор

import { wordReducer } from "./wordReducer";
import { errReducer } from "./errorReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore, compose, combineReducers } from "redux";

//LocalStorage

//проверяем в сторе наличие записи по ключу store
//если она есть, парсим и сохраняем в переменную persistedState
//если нет, возвращаем пустой объект
const persistedState = localStorage.getItem("store")
  ? JSON.parse(localStorage.getItem("store"))
  : {};

  //создаем стор с учетом переменной persistedState
export const store = createStore(
  combineReducers({ words: wordReducer, errors: errReducer }),
  persistedState,
  compose(applyMiddleware(thunk), composeWithDevTools())
);
// подписываемся на все изменения в сторе, чтобы они сразу попадали в локалсторадж
store.subscribe(() => {
  localStorage.setItem("store", JSON.stringify(store.getState()));
});
