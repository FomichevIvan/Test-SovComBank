import { Input, Icon } from "semantic-ui-react";


const Finder = ({wordHandler, findInStore}) => {
  

  return (
    <div className="finder">
      {findInStore ? <div className="boundary">
        <Input         
          onChange={wordHandler}
          size="large"
          icon={<Icon name="search" circular link />}
          placeholder="find word..."
        />
      </div> :  <div className="boundary">
        <Input
          onChange={wordHandler}
          size="large"
          icon={<Icon name="search" circular link />}
          placeholder="add word..."
        />
      </div>}
     
    </div>
  );
};

export default Finder;
