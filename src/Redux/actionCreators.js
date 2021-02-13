import { ADD_WORD, SHOW_ERR, LIKE_WORD, SORT_WORD, PARTS_OF_SPEECH } from "./actionTypes";
import uuid from "react-uuid";

export const addWordAC = (payload) => ({ type: ADD_WORD, payload });
export const showErrAC = (payload) => ({ type: SHOW_ERR, payload });
export const likeWordAC = (payload) => ({ type: LIKE_WORD, payload });
export const sortWordsAC = (payload) => ({ type: SORT_WORD, payload });
// export const partsOfSpeechAC = (payload) => ({ type:  PARTS_OF_SPEECH, payload });

export const loadWordAC = (word) => (dispatch, getState) => {
  console.log(getState());
  fetch(
    `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20210209T192534Z.08ac2621745e2f4b.5401d4340590d358d875e2e35d6cc06e62dfb9d2&lang=en-en&text=${word}`,
    {
      method: "GET",
    }
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Smth is wrong(((");
    }) // преобразую в джейсон
    // .then(res => console.log(res))
    .then((res) => ({
      isLiked: false,
      id: uuid(),
      partOfSpeech: res.def[0].pos,
      word: res.def[0].text,
      tr: res.def[0].ts,
      definition: [
        res.def[0].tr[0].text,
        res.def[0].tr[1].text,
        res.def[0].tr[2].text,
      ],
    }))
    // .then(res => console.log(res))
    .then((res) => dispatch(addWordAC(res)))
    .catch((e) => dispatch(showErrAC(e)));
};
