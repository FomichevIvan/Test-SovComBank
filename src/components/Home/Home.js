import Block from '../Block/Block'
import Finder from '../Finder/Finder'
import List from '../List/List'
import {useDispatch} from 'react-redux'
import { useSelector } from "react-redux";
const Home = () => {
  const store = useSelector(store => store.words)
  // console.log(store);

  return (
    <div className="home">
   
     <div className="input-block">
     <Finder />
      {/* <Parts/> */}
     </div>
     <List words={store}/>

    </div>
    );
}
 
export default Home;
