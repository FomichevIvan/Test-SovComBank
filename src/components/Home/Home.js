import Block from '../Block/Block'
import Finder from '../Finder/Finder'
import List from '../List/List'
const Home = () => {
  return (
    <div className="home">
   
     <div className="input-block">
     <Finder />
      {/* <Parts/> */}
     </div>
     <List/>

    </div>
    );
}
 
export default Home;
