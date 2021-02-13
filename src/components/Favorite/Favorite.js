import Finder from "../Finder/Finder";
import Parts from "../Parts/Parts";
import List from "../List/List";
import { useSelector } from "react-redux";
import { useState } from "react";

const Favorite = () => {
  const [checkNoun, setCheckNoun] = useState(true);
  const [checkVerb, setCheckVerb] = useState(true);
  const [checkAdjective, setCheckAdjective] = useState(true);
  const [arrOfParts, setArrOfParts] = useState(["noun", "verb", "adjective"]);

  const checkNounHandler = () => {
    setCheckNoun(!checkNoun);
    if (!arrOfParts.includes("noun")) {
      // проверяем, есть ли в массиве частей речи noun
      setArrOfParts([...arrOfParts, "noun"]); // если нет, то добавляем
    } else setArrOfParts(arrOfParts.filter((el) => el !== "noun")); // если уже есть, то убираем
  };

  const checkVerbHandler = () => {
    setCheckVerb(!checkVerb);
    if (!arrOfParts.includes("verb")) {
      setArrOfParts([...arrOfParts, "verb"]);
    } else setArrOfParts(arrOfParts.filter((el) => el !== "verb"));
  };
  const checkAdjectiveHandler = () => {
    setCheckAdjective(!checkAdjective);
    if (!arrOfParts.includes("adjective")) {
      setArrOfParts([...arrOfParts, "adjective"]);
    } else setArrOfParts(arrOfParts.filter((el) => el !== "adjective"));
  };

  const words = useSelector((store) => store.words).filter((el) => el.isLiked).sort((prev, next) => {// сортировка по входящему слову по алфавиту
    if ( prev.word < next.word ) return -1;
    if ( prev.word < next.word ) return 1;
  });

  const checkedParts = [];
  for (let speechPart of arrOfParts) {
    for (let word of words) {
      if (word.partOfSpeech === speechPart) {
        checkedParts.push(word);
      }
    }
  }

  return (
    <div className="home">
      <div className="input-block">
        <div className='outDiv'><Finder />
        <div className='inDiv'><Parts
          checkNoun={checkNoun}
          checkNounHandler={checkNounHandler}
          checkVerb={checkVerb}
          checkVerbHandler={checkVerbHandler}
          checkAdjective={checkAdjective}
          checkAdjectiveHandler={checkAdjectiveHandler}
        /></div>
        </div>
      </div>
      <List words={checkedParts} />
    </div>
  );
};

export default Favorite;
