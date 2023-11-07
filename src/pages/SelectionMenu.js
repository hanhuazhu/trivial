import BackButton from "../components/BackButton";
import CustomizeButton from "../components/CustomizeButton";
import QuickplayButton from "../components/QuickplayButton";


const SelectionMenu = () => {
  return (
    <div className="bg-neutral-200 flex flex-col h-full justify-center
    ">
      <BackButton />
      <QuickplayButton />
      <CustomizeButton />
    </div>
  );
}

export default SelectionMenu;