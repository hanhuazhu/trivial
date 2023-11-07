import React, { useState } from 'react';

const ConfigCard = (props) => {
  const subject = props.value;
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${toggle ? '' : 'brightness-50'} h-80 w-40 text-center 
    bg-emerald-400`} onClick={() => setToggle(!toggle)}>
      {subject.name}
    </div>
  );
}

export default ConfigCard;