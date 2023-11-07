import { Link } from "react-router-dom";

const RestartButton = (props) => {
  
    return (
      <div 
        className="bg-emerald-400 text-white text-2xl font-semibold w-64
          text-center px-6 py-4 rounded-md shadow-lg">
        <Link to="/">
          Restart?
        </Link>
      </div>    
    );
  }
  
  export default RestartButton;