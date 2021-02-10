import Block from '../Block/Block'
import Finder from '../Finder/Finder'
import Parts from '../Parts/Parts'
const Home = () => {
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
 
export default Home;
