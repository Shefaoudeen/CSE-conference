import React from 'react'
import profilePlaceHolder from "../../assets/Images/profilePlaceHolder.jpg"
import speaker1 from "../../assets/Images/profiles/speaker1.png"
import speaker2 from "../../assets/Images/profiles/speaker2.png"
import speaker3 from "../../assets/Images/profiles/speaker3.png"

const Speakers = () => {
  return (
    <div className='flex mx-auto max-w-fit flex-col items-center justify-center mb-20'>
        <h2 className='font-semibold text-3xl text-center border-b-[3px] pb-0.5 border-blue-700 max-w-fit'>Keynote speakers</h2>
        <div className='mt-14 grid grid-cols-3 gap-40'>
            <div className='relative flex flex-col items-center text-lg'>
                <div className='min-w-52 min-h-52 rounded-full absolute -z-10 bg-blue-800 left-8 -top-5'></div>
                <img src={speaker1} className='w-52 h-52 rounded-full' alt="image" />
                <p className='font-semibold text-blue-700 text-xl mt-3'>Dr. Shlomi Dolev</p>
                <p>Professor</p>
                <p>Ben-Gurion University of the Negev, Israel</p>
            </div>
            <div className='relative flex flex-col items-center text-lg'>
                <div className='min-w-52 min-h-52 rounded-full absolute -z-10 bg-blue-800 left-8 -top-5'></div>
                <img src={speaker2} className='w-52 h-52 rounded-full' alt="image" />
                <p className='font-semibold text-blue-700 text-xl mt-3'>Dr. Balaji Palanisamy</p>
                <p>Director of Graduate Studies</p>
                <p>University of Pittsburgh, USA</p>
            </div>
            <div className='relative flex flex-col items-center text-lg'>
                <div className='min-w-52 min-h-52 rounded-full absolute -z-10 bg-blue-800 left-8 -top-5'></div>
                <img src={speaker3} className='w-52 h-52 rounded-full' alt="image" />
                <p className='font-semibold text-blue-700 text-xl mt-3'>Dr. Shamik Sural</p>
                <p>Professor</p>
                <p>IIT Kharagpur</p>
            </div>
        </div>
    </div>
  )
}

export default Speakers