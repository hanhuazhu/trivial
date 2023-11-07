import { FaGear } from 'react-icons/fa6';
import Tooltip from './Tooltip';

const OptionButton = () => {
  return (
    <div className='group relative mx-4 text-2xl'>
      <FaGear />
      <Tooltip value="Options"/>
    </div>
  );
}

export default OptionButton;