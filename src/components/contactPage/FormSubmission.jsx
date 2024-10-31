import React from 'react'
import Buttons from '../common/Buttons'

const FormSubmission = () => {
    return (
        <div className='flex items-center justify-center bg-inherit'>
            <div className='flex flex-col gap-10 items-center justify-center p-2'>
                <div className='w-4/6  text-center'>
                    <h3 className='text-lg md:text-xl lg:text-4xl'>Connect With Us Today!</h3>
                    <p className='text-[12px] md:text-base'>Whether you have questions about our services, want to request a consultation, or are ready to get started, we're just a click away. Fill out the form, and one of our experts will be in touch with you shortly.</p>
                </div>
                <div className='md:w-4/6 bg-[#0A1828] rounded-2xl p-3 md:p-10 space-y-6'>
                    <div className='flex items-center justify-center gap-3'>
                        <div className='w-1/2'>
                            <label htmlFor="" className='text-[10px] md:text-sm'>Name</label>
                            <input type="text" className='w-full outline-none  text-black p-1 md:p-2 text-sm rounded-md md:rounded-full' />
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="" className='text-[10px] md:text-sm'>Company</label>
                            <input type="text" className='w-full outline-none  text-black p-1 md:p-2 text-sm rounded-md md:rounded-full' />
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <div className='w-1/2'>
                            <label htmlFor="" className='text-[10px] md:text-sm'>Email</label>
                            <input type="text" className='w-full outline-none text-black p-1 md:p-2 text-sm rounded-md md:rounded-full' />
                        </div>
                        <div className='w-1/2'>
                            <label htmlFor="" className='text-[10px] md:text-sm'>Phone Number</label>
                            <input type="text" className='w-full outline-none  text-black p-1 md:p-2 text-sm rounded-md md:rounded-full' />
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-3'>
                        <div className='w-full'>
                            <label htmlFor="message" className='text-[10px] md:text-sm'>Message</label>
                            <textarea type="text" className='w-full outline-none  text-black p-3 rounded-md md:rounded-3xl' />
                        </div>
                    </div>
                    <div className=''>
                        <Buttons content={'Send Message'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormSubmission