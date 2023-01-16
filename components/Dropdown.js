"use client"

import { useState } from "react"
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci"
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi2"

const Dropdown = ({ children, title }) => {
    
    const [ open, setOpen ] = useState(false)
    
    const handleClickDropdown = () => {
        setOpen(!open)
    }
    return ( 
        <>
            <button onClick={()=>handleClickDropdown()} className="w-full text-left p-5 shadow-md transition-colors rounded-lg">
            <div className=" flex justify-between items-center">
                <h5 className="font-montserrat font-semibold text-slate-800 transition-colors">{ title }</h5>
                <div className="flex items-center">
                    {
                        open
                        ? <HiOutlineMinus size="30" className="ml-4 text-orange-600/80 transition-colors"/> 
                        : <HiOutlinePlus size="30" className="ml-4 text-orange-600/80 transition-colors"/>
                    }
                </div>
            </div>
            { open ? children : null }
            </button>
        </>
     );
}
 
export default Dropdown;