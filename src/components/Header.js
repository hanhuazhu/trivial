import OptionButton from './OptionButton';
import HelpButton from './HelpButton';

const Header = () => {
  return (
    <div className='min-w-full h-11'>
      <header className='min-w-full h-full px-10 flex flex-row 
      justify-end items-center'>
        <OptionButton />
        <HelpButton />
      </header>
    </div>
  );
}

export default Header;