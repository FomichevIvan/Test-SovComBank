import Star from "../Star/Star"

const Block = ({word}) => {
  //получаем пропсами данные каждого слова и рендерим
  return (  
    <div className="block">
      <span>{word.word}</span>
      <span>{word.definition.join(',')}</span>
      <span>[{word.tr}]</span>
      <div><Star id={word.id} isLiked={word.isLiked}/></div>
    </div>
  );
}
 
export default Block;
