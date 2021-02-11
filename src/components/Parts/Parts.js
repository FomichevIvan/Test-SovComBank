import { useState, useRef } from "react";
import { Checkbox } from "semantic-ui-react";

const Parts = () => {
  // const nounRef = useRef()
  // const noun = nounRef.current.value
  // console.log(noun);

  // const [check, setCheck] = useState({
  //   noun: false,
  //   verb: false,
  //   adjective: false,
  // });
  const checkHandler = (e) => {
    console.log(e);
    // let t = e.target.innerText.toLowerCase()
    
    // setCheck({...check, t : !check.target})
    
   
  };

  return (
    <div className="parts">
      <div onClick={checkHandler} className="check" >
        <Checkbox name="noun" label="Noun" />
        <Checkbox  name="verb" label="Verb" />
        <Checkbox  name="adjective" label="Adjective" />
      </div>
    </div>
  );
};

export default Parts;
