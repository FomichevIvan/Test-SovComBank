import { Checkbox } from "semantic-ui-react"

const Parts = () => {
  return ( <div className="parts">
   <div className="check">
   <Checkbox value='noun'/>
    <Checkbox value='adjective'/>
    <Checkbox value='verb'/>
   </div>

  </div> );
}
 
export default Parts;
