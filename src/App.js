import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Favorite from './components/Favorite/Favorite'

function App() {
  return (    <Router>
    <div className="App">
      <Navbar />
      <div className="">
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Route exact path='/blogs/:id' component={BlogDetails}/>
          <Route exact path='/create' component={Create}/> */}
          <Route exact path='/favorite' component={Favorite}/>
          {/* <Route exact path='/blogs/:id/edit' component={Edit}/> */}
       
        </Switch>
      </div>
        <Footer/>
    </div>
  </Router>
  );
}

export default App;
