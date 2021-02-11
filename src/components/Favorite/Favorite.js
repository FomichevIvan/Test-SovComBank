import Finder from '../Finder/Finder'
import Parts from '../Parts/Parts'
import Block from '../Block/Block'

const Favorite = () => {

  return ( 
    <div className="home">
   
    <div className="input-block">
    <Finder />
     <Parts/>
    </div>
    <Block/>

   </div>
   );
}
 
export default Favorite;
