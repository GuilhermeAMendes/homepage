import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import '../components/Arrow/Arrow.css'
const CollapsibleOpen = ({ text }) => {
  return (
    <div className='CollapsibleTriggerContainer'>
      <MdKeyboardArrowUp className='collapsibleOpen-arrow' />
      <span>{text}</span>
    </div>
  );
};

export default CollapsibleOpen;