import { Input, Icon } from "semantic-ui-react";
import { useState, useRef } from "react";

const Finder = () => {
  const wordHandler = (e) => {
    console.log(e.target.value);
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
