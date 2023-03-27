import React from 'react'
import ImageModal from '../../UI/ImageModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayAction } from '../../store/display_slice';



const ModalDisplay = ({ images, imageMain }) => {
    const dispatch = useDispatch()
    const imageAppear = useSelector(state => state.toggle.display)


    const imageClick = () => {
        dispatch(displayAction.onToggleImage())
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    console.log(images.length)

    const forWardButton = () => {
        setCurrentIndex(currentIndex => currentIndex + 1)
    }

    const backWordButton = () => {
        setCurrentIndex(currentIndex => currentIndex - 1)
    }

    const handleClick = (index) => {
        setCurrentIndex(index);
    };
    console.log(currentIndex)

    const len = images.length;
    const verify = currentIndex >= len - 1;
    // <button onClick={forWardButton} disabled={verify}>forward</button>
    //                 <button onClick={backWordButton} disabled={currentIndex <= 0}>back</button>

    return (
        <ImageModal imageAppear={imageAppear} imageClick={imageClick}>
            <div
             className="flex justify-center items-center hidden sm:block"
             style={{
               position: "fixed",
               top: "50%",
               left: "63%",
               width: "60%",
               maxHeight: "80%",
               transform: "translate(-50%, -50%)",
               zIndex: "30"
             }}
            >
            <div className="relative">

                <div className="w-1/2 p-2 relative flex justify-center">
                    <button onClick={imageClick} className='svg-hover' style={{ position: "absolute", top: '-5%', right: "3%" }}><svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#fff" fill-rule="evenodd" /></svg></button>

                    <img src={imageMain[currentIndex]} alt="Main Product Image" className="rounded-xl" />

                    <button onClick={forWardButton} disabled={verify} className='absolute   font-semibold inset-y-0 right-0 bg-white h-8 w-8 rounded-full flex justify-center content-start items-center svg-hover' style={{ top: '50%', transform: 'translateY(-50%)' }}>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
                    </button>

                    <button onClick={backWordButton} disabled={currentIndex <= 0} className='absolute    inset-y-0 left-0 bg-white h-8 w-8 rounded-full flex justify-center items-center svg-hover' style={{ top: '50%', transform: 'translateY(-50%)' }}>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
                    </button>


                </div>


                <div className="w-1/2 p-2 flex justify-center items-center">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Product Thumbnail ${index}`}
                            className={`h-16 w-16 m-2 rounded-xl ${currentIndex === index ? 'border-2 opacity-80 bg-[#f99344]  border-[#ff7d1a]' : ''
                        }`}
                                
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>

            </div>
            </div>
        </ImageModal>
    )
}

export default ModalDisplay