import Finder from "../Finder/Finder";
import Parts from "../Parts/Parts";
import List from "../List/List";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import { store } from "../../Redux/store";

const Favorite = () => {
  const words = useSelector((store) => store.words)
  
  return (
    <div className="home">
      <div className="input-block">
        <Finder />
        <Parts />
      </div>
      <List  words={words.filter(el=> el.isLiked)}/>
    </div>
  );
};

export default Favorite;
