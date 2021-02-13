import Block from "../Block/Block";
import uuid from "react-uuid";

const List = ({ words }) => {
  // получаем слова и рендерим их мапом
  return (
    // рендрерим каждый блок <Block/>
    <div className="cont">
      {words && words.map((word) => <Block key={uuid()} word={word} />)}
    </div>
  );
};

export default List;
