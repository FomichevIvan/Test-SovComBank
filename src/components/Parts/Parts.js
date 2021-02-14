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
        <Checkbox onClick={checkNounHandler} checked={checkNoun} label="Noun"/>
        <Checkbox onClick={checkVerbHandler} checked={checkVerb} label="Verb"/>
        <Checkbox onClick={checkAdjectiveHandler} checked={checkAdjective} label="Adjective"/>
      </div>
    </div>
  );
};

export default Parts;
