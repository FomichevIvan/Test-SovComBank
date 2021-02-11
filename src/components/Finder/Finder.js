import { Input, Icon } from "semantic-ui-react";
import { useState, useRef } from "react";
import {useDispatch} from 'react-redux'
import { loadWordAC } from "../../Redux/actionCreators";


const Finder = () => {
  
  let throttle = (callback,waitTime) => {
    var wait = false;
    return () => {
      if (!wait) {
        callback();
        wait = true;
        // we will be able to invoke the callback again after a set amount of time
        setTimeout(()=> {
          wait = false;
        }, waitTime)
      }
    }
  }
  
  
  const dispatch = useDispatch()
  const wordHandler = (e) => {
    throttle(dispatch(loadWordAC(e.target.value)), 2000)
    // console.log(e.target.value);
    
  };

  return (
    <div className="finder">
      <div>
        <Input
          onChange={wordHandler}
          size="large"
          icon={<Icon name="search" circular link />}
          placeholder="word..."
        />
      </div>
    </div>
  );
};

export default Finder;
