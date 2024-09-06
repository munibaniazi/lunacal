import React from 'react';
import WidgetHeader from './WidgetHeader';
import '../fonts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const Widget1 = () => {
  return (
    <div className=" sticky h-[47.295%] pt-[2.362%] pl-[7.362%] pr-[7.362%] pb-[3.75%] bg-color1 text-white rounded-lg shadow-lg overflow-auto">
          <WidgetHeader/>
        </div>
  );
};

export default Widget1;