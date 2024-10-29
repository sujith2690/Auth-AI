import React from 'react'

const Buttons = ({ content }) => {
    return (
        <button className=" bg-gradient-to-r from-[#0788AE] to-[#22AAD2] rounded-full text-white px-8 py-1 text-sm border-0 border-[#A0EAFF]">
            {content}
        </button>
        
    )
}

export default Buttons