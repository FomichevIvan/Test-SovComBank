
import Finder from "../Finder/Finder";
import List from "../List/List";

import { useSelector } from "react-redux";
const Home = () => {
  const store = useSelector((store) => store.words).sort((prev, next) => {// сортировка по входящему слову по алфавиту
    if ( prev.word < next.word ) return -1;
    if ( prev.word < next.word ) return 1;
  })


  return (
    <div className="home">
      <div className="input-block">
        <Finder />
      </div>
      <List words={store} />
    </div>
  );
};

export default Home;
