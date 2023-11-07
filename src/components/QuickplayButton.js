import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";

const QuickplayButton = (props) => {

  return (
    <Link to="/4">
      <div className="bg-emerald-400 text-white text-xl font-semibold w-42
      text-center px-6 py-2 mb-12 rounded-md shadow-lg group relative">
        Quickplay
        <Tooltip value="The Classic Trivia Mode!" 
        position="bottom-14 left-0" />
      </div>
    </Link>

  );
}

export default QuickplayButton;