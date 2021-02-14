import DragHolder from "../DragHolder/DragHolder";
import Star from "../Star/Star";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Block = ({ word }) => {
  //получаем пропсами данные каждого слова и рендерим
  return (
    <Draggable>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          
          className="block"
        >
          <span className="dragHolder">
            <DragHolder  />
          </span>
          <span className="word">{word.word}</span>
          <span className="part">{word.partOfSpeech}</span>
          <span>{word.definition.join(", ").slice(0, 20) + "..."}</span>
          <span>[{word.tr}]</span>
          <div>
            <Star id={word.id} isLiked={word.isLiked} />
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Block;
