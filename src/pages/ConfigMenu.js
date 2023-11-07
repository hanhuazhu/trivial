import AcceptButton from "../components/AcceptButton";
import BackButton from "../components/BackButton";
import ConfigCard from "../components/ConfigCard";

const ConfigMenu = () => {
  const subjects = [ 
    {
      name: "Placeholder"
    }, 
    {
      name: "Placeholder"
    }, 
    {
      name: "Placeholder"
    }, 
    {
      name: "Placeholder"
    },     
  ];

  return (
    <div className="bg-neutral-200 flex flex-col h-full justify-center 
    text-center items-center">
        <BackButton />
        <h1 className="text-4xl mt-10">
          Choose your subjects!
        </h1>

      <div className="flex flex-row gap-8 my-5">
        {subjects.map((subject) => (
          <ConfigCard value={subject}/>
        ))}
      </div>
      <AcceptButton />
    </div>
  );
}

export default ConfigMenu;