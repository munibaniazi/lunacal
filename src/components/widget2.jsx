import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

function Widget2() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3;
  

  // Handler for file input change
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

if (files.some(file => !file.type.startsWith('image/'))) {
      setError('Please select only image files.');
      return;
    }

    setError('');
    
    const newImages = [];
    const readerPromises = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result);
          resolve();
        };
        reader.readAsDataURL(file);
      });
    });
    Promise.all(readerPromises).then(() => {
        setImages((prevImages) => [...prevImages, ...newImages]);
      });
    };
  
    const handleRemoveImage = (index) => {
      setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };
    
    const handlePrev = () => {
  
     setCurrentIndex((prevIndex) => Math.max(prevIndex - imagesPerPage, 0));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + imagesPerPage, images.length - imagesPerPage));
    };

    const displayedImages = images.slice(currentIndex, currentIndex + imagesPerPage);


  return (
    <>
    
    <div className="h-[49.7%] mt-[7.778%] pl-[7.362%] pr-[7.362%] pt-[2.778%] pb-[3.056%] bg-color1 text-white rounded-lg shadow-lg">
    
         <div className='h-[37.299%]  w-full flex flex-row space-x-[29.48%]'>
          <span className='bg-color2 h-[57.41%] w-[80%] rounded-lg  text-center flex items-center inline-block justify-center'>Gallery</span> 
           <button className="  h-[42.6%] w-1/2 bg-white-500 shadow-lg z-60 hover:shadow-xl rounded-full font-bold">
          <label
        htmlFor="fileInput"
        className='text-center flex items-center inline-block justify-center text-center text-xs bg-white-500 shadow-2xl cursor-pointer'>
        
        +ADD IMAGE
        <input
        type="file"
        accept="image/*"
        id="fileInput"
        onChange={handleFileChange}
        multiple
        className="hidden"
      />
      </label>
      </button>
        <div className=" flex flex-rows">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className=" h-4 bg-transparent p-1 rounded-full text-md cursor-pointer gap-2"
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + imagesPerPage >= images.length}
            className="h-4 bg-transparent p-1 rounded-full text-md cursor-pointer"
          >
          <FontAwesomeIcon icon={faArrowAltCircleRight}/>
          </button>
          </div>  
      </div>
      
      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className=' h-[61.816%] grid grid-cols-3 grid-rows-1 gap-6'>
      {images.map((image, index) => (
          <div key={index} className='relative overflow-hidden rounded-xl'>
            <img src={image} alt={`Selected ${index}`} className=" object-cover rounded shadow-md" />
            <button
              onClick={() => handleRemoveImage(index)}
              className="absolute top-2 right-2 w-6 h-6 bg-white text-black p-1 rounded-full text-sm cursor-pointer opacity-0 hover:opacity-40 transition-opacity duration-300"
            >
              X
            </button>
          </div>
          
        ))}
        </div>
      </div>
      </>
  )
}
export default Widget2