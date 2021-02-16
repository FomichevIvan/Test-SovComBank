import DragHolder from "../DragHolder/DragHolder";
import Star from "../Star/Star";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import ModalExampleBasic from "../Modal/Modal";



const Block = ({ word, provided }) => {

 
  //получаем пропсами данные каждого слова и рендерим
  return (
    <>
      <span {...provided.dragHandleProps} className="dragHolder">
        <DragHolder />
      </span>
      <span className="word">{word.word}</span>
      <span className="part">{word.partOfSpeech}</span>
      <span className="explanation">{word.definition.join(", ").slice(0, 20) + "..."}</span>
      <span className="modalIcon"><ModalExampleBasic word={word}/> </span>
      <div className="starIcon">
        <Star id={word.id} isLiked={word.isLiked} />
      </div>
    </>
  );
};

export default Block;
