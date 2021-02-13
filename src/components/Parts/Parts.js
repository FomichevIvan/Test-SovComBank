import { useState, useRef, useEffect } from "react";
import { Checkbox } from "semantic-ui-react";
import {useDispatch} from "react-redux"
import {sortWordsAC} from "../../Redux/actionCreators"
import {partsOfSpeechAC} from "../../Redux/actionCreators"

const Parts = ({checkNounHandler, checkNoun, checkVerbHandler, checkVerb, checkAdjectiveHandler, checkAdjective}) => {
  const dispatch = useDispatch()
  // const nounRef = useRef()
  // const noun = nounRef.current.value
  // console.log(noun);

  
  

  // const checkNounHandler = () => {
  //   setCheckNoun(!checkNoun)
  //   if (!sortArr.includes('noun')) {// проверяем, есть ли в массиве частей речи noun
  //     setSortArr([...sortArr, 'noun'])// если нет, то добавляем
  //   } else setSortArr(sortArr.filter(el => el !== 'noun'))// если уже есть, то убираем
   
  // };
 
  // const checkVerbHandler = () => {
  //   setCheckVerb(!checkVerb)
  //   if (!sortArr.includes('verb')) {
  //     setSortArr([...sortArr, 'verb'])
  //   } else setSortArr(sortArr.filter(el => el !== 'verb'))
      
  // };
  // const checkAdjectiveHandler = () => {
  //   setCheckAdjective(!checkAdjective)
  //   if (!sortArr.includes('adjective')) {
  //     setSortArr([...sortArr, 'adjective'])
  //   } else setSortArr(sortArr.filter(el => el !== 'adjective'))
    
  // };


  // useEffect(() => {
  //   // console.log(sortArr);
  //   dispatch(sortWordsAC(sortArr))

  // }, [sortArr])


  // useEffect(() => {
  //   // console.log(sortArr);
  //   dispatch(sortWordsAC(sortArr))

  // }, [sortArr])

  return (
    <div className="parts">
      <div  className="check" >
        <Checkbox onClick={checkNounHandler} checked={checkNoun} label="Noun" />
        <Checkbox onClick={checkVerbHandler} checked={checkVerb} label="Verb" />
        <Checkbox onClick={checkAdjectiveHandler} checked={checkAdjective}  label="Adjective" />
      </div>
    </div>
  );
};

export default Parts;
