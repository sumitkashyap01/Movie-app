import React, {useState} from 'react'

const Hamburger = ({isOpened,setIsOpened}) => {
    console.log(isOpened)
    return (
        <div
            onClick={() => setIsOpened(prev => !prev)}
            className={`flex flex-col md:hidden ${isOpened ? "gap-0" : "gap-1 duration-300"} `}>
            <div className={` w-6 h-1 bg-(--text-muted) duration-300 ${isOpened ? " rotate-45 translate-y-2" : "rotate-0 translate-y-0" } `}></div>
            <div className={` w-6 h-1 bg-(--text-muted) duration-300 ${isOpened ? "opacity-0" : "opacity-100"} `}></div>
            <div className={` w-6 h-1 bg-(--text-muted) duration-300 ${isOpened ? "-rotate-45 " : "rotate-0"} `}></div>
        </div>
    )
}
export default Hamburger
