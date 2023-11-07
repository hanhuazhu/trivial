import { Link } from "react-router-dom";

const PlayButton = (props) => {
    return (
      <div 
        className="bg-emerald-400 text-white text-3xl font-semibold w-32
        text-center px-6 py-2 mb-12 rounded-md shadow-lg group relative">
        <Link to="2">
          Play
        </Link>
      </div>    
    );
  }
  
  export default PlayButton;