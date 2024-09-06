import React from 'react';
import './App.css';
import Widget1 from './components/widget1';
import Widget2 from './components/widget2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';


function App () {
  return (
    
    <div className='h-screen flex bg-gradient'>

   
    <div className="w-1/2 bg-transparent max-sm:hidden"></div>
    
    {/* Right Half - Two Widgets */}
    
    <div className="w-1/2 max-sm:w-full pr-[6.25%] pl-[2.0839%] pt-[5.556%] pb-[5.556%] flex flex-col space-y">
        {/* First Widget */}
        <Widget1/>
        {/* Second Widget */}
    

        <Widget2/>
      </div>
      </div>
    
    
  );
}

export default App;
