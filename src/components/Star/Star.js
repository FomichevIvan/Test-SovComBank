import {useDispatch} from 'react-redux'
import {likeWordAC} from '../../Redux/actionCreators'
const Star = ({id, isLiked}) => {
  
  const dispatch = useDispatch();

  const likeHandler = (e) => {
    dispatch(likeWordAC(id))
    console.log(id, isLiked);

    
  };

  return (
    <div className="pointer">
    <i 
      onClick={likeHandler}
      className={isLiked ? "star fa-lg fa fa-star" : "star fa-lg fa fa-star-o"  }
      aria-hidden="true"
    ></i></div>
  );
};

export default Star;
