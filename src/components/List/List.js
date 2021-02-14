import Block from "../Block/Block";
import uuid from "react-uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import DragHolder from "../DragHolder/DragHolder";
import Star from "../Star/Star";

const List = ({ words }) => {
  // получаем слова и рендерим их мапом
  return (
    // рендрерим каждый блок <Block/>
    <DragDropContext onDragEnd={(params) => {
      console.log(params)
      const destinationInd = params.destination.index
      const sourceInd = params.source.index
      //по индексу destinationInd (удаляем 0 элементов) вставляем массив(развернув), который вернулся от words.splice(sourceIndб 1)  Это элемент с индексом sourceInd. Другими словами, на индекс destinationInd ставим то, что находилось на sourceInd
      words.splice(destinationInd, 0, ...words.splice(sourceInd, 1))
    }}>
      <div className="dropCont">
        <Droppable droppableId="droppable-1">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="cont"
            >
              {words &&
                words.map((word, ind) => (
                  <Draggable
                    key={word.id}
                    draggableId={"draggable-" + word.id}
                    index={ind}
                  >
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
                        <span>
                          {word.definition.join(", ").slice(0, 20) + "..."}
                        </span>
                        <span>[{word.tr}]</span>
                        <div>
                          <Star id={word.id} isLiked={word.isLiked} />
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default List;
