import Block from "../Block/Block";
import uuid from 'react-uuid'
import {useSelector} from 'react-redux'

const List = ({words}) => {
  // const words = useSelector((store) => store.words).filter(el=> el.isLiked)
  // console.log(words, 'list');
// получаем слова и рендерим их мапом
  return ( // рендрерим каждый блок <Block/>
    <div className="cont">
      {words&& words.map (word => <Block key={uuid()} word={word}/>)}

    </div>
   );
}
 
export default List;
