import DragHolder from "../DragHolder/DragHolder";
import Star from "../Star/Star";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Block = ({ word, provided }) => {
  //получаем пропсами данные каждого слова и рендерим
  return (
    <>
      <span  {...provided.dragHandleProps} className="dragHolder">
        <DragHolder />
      </span>
      <span className="word">{word.word}</span>
      <span className="part">{word.partOfSpeech}</span>
      <span>{word.definition.join(", ").slice(0, 20) + "..."}</span>
      <span>[{word.tr}]</span>
      <div>
        <Star id={word.id} isLiked={word.isLiked} />
      </div>
    </>
  );
};

export default Block;
