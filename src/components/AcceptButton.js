import { Link } from "react-router-dom";

const AcceptButton = (props) => {

  return (
      <div className="bg-emerald-400 text-white text-xl font-semibold w-64
      text-center px-6 py-2 mb-12 rounded-md shadow-lg">
        
        <Link to="/4" className="w-64 h-30">Accept</Link>
      </div>
  );
}

export default AcceptButton;