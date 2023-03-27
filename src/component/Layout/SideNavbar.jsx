import React from 'react'
import { FaTimes } from 'react-icons/fa'

import NavbarModal from '../../UI/NavbarModel'
import { useDispatch, useSelector } from 'react-redux'
import { displayAction } from '../../store/display_slice'

const SideNavbar = () => {
    const dispatch = useDispatch()
    const showNavbar = useSelector((state) => state.toggle.navbar)
    console.log(showNavbar)

    const onHandleToggle = () => {
        dispatch(displayAction.onToggleNavbar())

    }
    return (
        <>
            <NavbarModal onClose={onHandleToggle} showNavbar={showNavbar} sidenavbar>
                <div
                    className={`${showNavbar ? "translate-x-0" : "-translate-x-full"} fixed top-0 left-0 bg-white h-screen w-full max-w-xs z-40 transition-transform duration-300 ease-in-out`}
                >
                    <div className="ml-6 flex flex-col items-start gap-6">
                        <button className="my-8">
                            <FaTimes onClick={onHandleToggle} className='text-sm font-semibold text-[#68707d] hover:text-[#1d2025]' />
                        </button>
                        <div className="">
                            <a href="/" className='text-sm font-semibold text-[#68707d] hover:text-[#1d2025]'>Collections</a>
                        </div>
                        <div className="">
                            <a href="/" className='text-sm font-semibold text-[#68707d] hover:text-[#1d2025]'>Men</a>
                        </div>
                        <div className="">
                            <a href="/" className='text-sm font-semibold text-[#68707d] hover:text-[#1d2025]'>Women</a>
                        </div>
                        <div className="">
                            <a href="/" className='text-sm font-semibold text-[#68707d] hover:text-[#1d2025]'>About</a>
                        </div>
                        <div className="">
                            <a href="/" className='text-sm font-semibold text-[#68707d] hover:text-[#1d2025]'>Contact</a>
                        </div>
                    </div>
                </div>

            </NavbarModal>
        </>
    )
}

export default SideNavbar