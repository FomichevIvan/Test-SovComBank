import { Input, Icon } from "semantic-ui-react";

const Finder = () => {
  return (
    <div className="finder">
      <div>
      <Input size='large'
    icon={<Icon name='search' circular link />}
    placeholder='word...'
  />
      </div>
    </div>
  );
};

export default Finder;
