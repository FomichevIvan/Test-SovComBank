import Star from "../Star/Star"

const Block = () => {
  //получаем пропсами данные каждого слова и рендерим
  return (  
    <div className="block">
      <span>{'word'}</span>
      <span>{'definition'}</span>
      <div><Star/></div>
    </div>
  );
}
 
export default Block;
