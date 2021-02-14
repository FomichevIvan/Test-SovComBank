import Block from "../Block/Block";
import uuid from "react-uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import DragHolder from "../DragHolder/DragHolder";
import Star from "../Star/Star";

const List = ({ words }) => {
  // получаем слова и рендерим их мапом
  return (
    // рендрерим каждый блок <Block/>
    <DragDropContext
      onDragEnd={(params) => {
       
        const destinationInd = params.destination.index;
        const sourceInd = params.source.index;
        //по индексу destinationInd (удаляем 0 элементов) вставляем массив(развернув), который вернулся от words.splice(sourceIndб 1)  Это элемент с индексом sourceInd. Другими словами, на индекс destinationInd ставим то, что находилось на sourceInd.
        words.splice(destinationInd, 0, ...words.splice(sourceInd, 1));
      }}
    >
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
                      className="block"
                      ref={provided.innerRef}
                      {...provided.draggableProps}                      
                    >
                      <Block provided={provided} word={word} />
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
