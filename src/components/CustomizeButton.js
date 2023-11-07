import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";

const CustomizeButton = (props) => {
    const title = props.value;
  
    const handleClick = () => {
        
    }
  
    return (
      <Link to="/3"> 
        <div className="bg-emerald-400 text-white text-xl font-semibold w-42
        text-center px-6 py-2 mb-12 rounded-md shadow-lg group relative">
          Customize
          <Tooltip value="Customize your experience!" 
          position="bottom-14 left-0" />
        </div>
      </Link>    
    );
  }
  
  export default CustomizeButton;