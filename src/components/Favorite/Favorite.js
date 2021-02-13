import Finder from "../Finder/Finder";
import Parts from "../Parts/Parts";
import List from "../List/List";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import { store } from "../../Redux/store";
import {useState} from 'react'

const Favorite = () => {

  const [checkNoun, setCheckNoun] = useState(true)
  const [checkVerb, setCheckVerb] = useState(true)
  const [checkAdjective, setCheckAdjective] = useState(true)
  const [sortArr, setSortArr] = useState(['noun', 'verb', 'adjective'])
  console.log(sortArr);
  
  const checkNounHandler = () => {
    setCheckNoun(!checkNoun)
    if (!sortArr.includes('noun')) {// проверяем, есть ли в массиве частей речи noun
      setSortArr([...sortArr, 'noun'])// если нет, то добавляем
    } else setSortArr(sortArr.filter(el => el !== 'noun'))// если уже есть, то убираем
   
  };
 
  const checkVerbHandler = () => {
    setCheckVerb(!checkVerb)
    if (!sortArr.includes('verb')) {
      setSortArr([...sortArr, 'verb'])
    } else setSortArr(sortArr.filter(el => el !== 'verb'))
      
  };
  const checkAdjectiveHandler = () => {
    setCheckAdjective(!checkAdjective)
    if (!sortArr.includes('adjective')) {
      setSortArr([...sortArr, 'adjective'])
    } else setSortArr(sortArr.filter(el => el !== 'adjective'))
    
  };



  // const part = ['noun', 'verb', 'adjective']
  const words = useSelector((store) => store.words).filter(el=> el.isLiked)

  const checkedParts = []
  for(let speechPart of sortArr) {
   for(let word of words) {
     if(word.partOfSpeech === speechPart) {
       checkedParts.push(word)
     }
   }
  }
  
  return (
    <div className="home">
      <div className="input-block">
        <Finder />
        <Parts checkNoun={checkNoun} checkNounHandler={checkNounHandler} checkVerb={checkVerb} checkVerbHandler={checkVerbHandler} checkAdjective={checkAdjective} checkAdjectiveHandler={checkAdjectiveHandler}/>
      </div>
      <List  words={checkedParts}/>
    </div>
  );
};

export default Favorite;
