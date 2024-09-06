import React, {useState} from 'react'

const WidgetHeader = () => {
    const [activeTab, setActiveTab] = useState('about');
    
    const tabContent = {
        about:(
        
        <div className=' pt-[5.702%] ' >
         <p className='font-abc text-color4 text-fsize'>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. <br /> <br/> I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...,</p>
         
         </div>
        ),
        experiences: '',
        recommended: ''
      };
    

    return(
        <>
    <div className='bg-color2 w-[100%] h-[20.69%] rounded-lg flex items-center justify-between sticky top-0'>

    <div className='w-[100%] p-[0.978%] flex items-center justify-between shadow-lg'>
        <button onClick= {()=>setActiveTab('about')}
            className= {`w-1/3 hover:bg-color3 text-text rounded-lg  ${activeTab === 'about' ? ' ' : ' '} focus:outline-none `}>
            About Me
        </button>
        <button onClick={()=>setActiveTab('experiences')}
            className={`w-1/3 hover:bg-color3 text-text rounded-lg focus:outline-none ${activeTab === 'experiences' ? '' : ''}`}>
            Experiences
        </button>
        <button onClick={()=>setActiveTab('recommended')}
            className={`w-1/3 hover:bg-color3 text-text rounded-lg focus:outline-none ${activeTab === 'recommended' ? '' : ''}`}>
            Recommended
        </button>
    </div>
    
    </div>
    <div>
    {tabContent[activeTab]}
  </div>
  </>
    );
}


export default WidgetHeader