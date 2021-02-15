import { Checkbox } from "semantic-ui-react";

const Parts = ({
  checkNounHandler,
  checkNoun,
  checkVerbHandler,
  checkVerb,
  checkAdjectiveHandler,
  checkAdjective,
}) => {


  return (
    <div className="parts">
      <div className="check">
        <Checkbox className="checkbox" onClick={checkNounHandler} checked={checkNoun} label="Noun"/>
        <Checkbox className="checkbox" onClick={checkVerbHandler} checked={checkVerb} label="Verb"/>
        <Checkbox  className="checkbox" onClick={checkAdjectiveHandler} checked={checkAdjective} label="Adjective"/>
      </div>
    </div>
  );
};

export default Parts;
