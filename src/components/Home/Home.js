//dnd: как обернуть глупый компонент в драггабл
// развернуть карточку слова
//тротлинг

//localStorage!!!!



//css: футер. чекбокс стилизовать. мобильная верстка



import {useDispatch} from 'react-redux'
import Finder from "../Finder/Finder";
import List from "../List/List";
import {loadWordAC} from '../../Redux/actionCreators'

import { useSelector } from "react-redux";
const Home = () => {
  const store = useSelector((store) => store.words).sort((prev, next) => {// сортировка по входящему слову по алфавиту
    if ( prev.word < next.word ) return -1;
    if ( prev.word < next.word ) return 1;
  })

  //логика запроса с АПИ Яндекса
  const dispatch = useDispatch()
  const wordHandler = (e) => {
   dispatch(loadWordAC(e.target.value))
 
  };

  return (
    <div className="home">
      <div className="input-block">
        <Finder wordHandler={wordHandler}/>
      </div>
      <List words={store} />
    </div>
  );
};

export default Home;
