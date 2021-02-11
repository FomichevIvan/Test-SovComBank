import Finder from '../Finder/Finder'
import Parts from '../Parts/Parts'
import List from '../List/List'
import {useSelector} from 'react-redux'
import uuid from 'react-uuid'

const Favorite = () => {
  const store = useSelector(store => store.words)


  return ( 
    <div className="home">
   
    <div className="input-block">
    <Finder />
     <Parts/>
    </div>
    <List words={store}/>

   </div>
   );
}
 
export default Favorite;
