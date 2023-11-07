import { FaQuestion } from 'react-icons/fa';
import Tooltip from './Tooltip';

const HelpButton = () => {
  return (
    <div className='group relative mx-4 text-2xl'>
      <FaQuestion />
      <Tooltip value="Help"/>
    </div>
  );
}

export default HelpButton;