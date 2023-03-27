import React, { useState } from 'react';
import ModalDisplay from './ModalDisplay';
import { useDispatch, useSelector } from 'react-redux';
import { displayAction } from '../../store/display_slice';


const ImageDisplay = ({ images, imageMain }) => {
  const dispatch = useDispatch()

  const displaySlide = useSelector((state) => state.toggle.display);

  const imageClick = () => {
    dispatch(displayAction.onToggleImage())
  }


  const [currentIndex, setCurrentIndex] = useState(0);

  const forWardButton = () => {
    setCurrentIndex(currentIndex => currentIndex + 1)
  }

  const backWordButton = () => {
    setCurrentIndex(currentIndex => currentIndex - 1)
  }

  console.log(currentIndex)

  const len = images.length;
  const verify = currentIndex >= len - 1;


  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="flex flex-col w-full sm:max-w-xs px-0  " >
        <div className="relative" onClick={imageClick}>
          <img src={imageMain[currentIndex]} alt="Main Product Image" className="h-full  w-full  rounded-none sm:rounded-lg" />
          <button onClick={forWardButton} disabled={verify} className='absolute sm:hidden font-semibold inset-y-0 right-0 bg-white h-8 w-8 rounded-full flex justify-center content-start items-center svg-hover' style={{ top: '50%', transform: 'translateY(-50%)' }}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
          </button>

          <button onClick={backWordButton} disabled={currentIndex <= 0} className='absolute sm:hidden inset-y-0 left-0 bg-white h-8 w-8 rounded-full flex justify-center items-center svg-hover' style={{ top: '50%', transform: 'translateY(-50%)' }}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
          </button>

        </div>
        <div className=" flex justify-between">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Thumbnail ${index}`}
              className={`h-16 w-16 hidden sm:block my-4 rounded-lg ${currentIndex === index ? 'border-2 opacity-50 bg-[#f99344]  border-[#ff7d1a]' : ''
                }`}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
      {displaySlide && <ModalDisplay imageMain={imageMain} images={images} />}
    </>
  );
};

export default ImageDisplay;
