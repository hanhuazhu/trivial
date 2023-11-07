import { useNavigate } from "react-router-dom";

const BackButton = (props) => {
    const navigate = useNavigate();
  
    return (
      <div> 
        <button className="absolute left-8 top-2 bg-emerald-400 text-white 
        text-sm font-semibold text-center px-4 py-1 rounded-md shadow-lg"
            onClick={() => navigate(-1)}>
            Back
        </button>
      </div>    
    );
  }
  
  export default BackButton;