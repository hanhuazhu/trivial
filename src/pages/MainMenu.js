import PlayButton from "../components/PlayButton";

const MainMenu = () => {
  return (
    <div className="bg-neutral-200 flex flex-col h-full justify-center
      ">
      <div>
        <h1 className="text-5xl text-center mb-8">
          Trivial
        </h1>
      </div>
      <PlayButton />
    </div>
  );
}

export default MainMenu;