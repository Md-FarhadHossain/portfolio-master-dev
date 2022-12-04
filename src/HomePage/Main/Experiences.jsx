import React from 'react'
import adidas from '../../assets/adidas_PNG8.png'
import netflix from '../../assets/Netflix-Logo-2006.png'


const Experiences = () => {
  return (
    <div className='bg-white rounded-lg px-8 py-5'>
        <h1 className="text-3xl mb-8">Experiences</h1>
        {/* 1 */}
        <div className='flex items-start justify-between mb-12 gap-10'>
            <img className='w-24' src={adidas} alt="adidas" />
            <div>
                <p>Feb 2022 - Current</p>
                <h3 className="text-lg font-semibold">Front-end developer</h3>
                <p className='mt-8'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
            </div>
        </div>

        {/* 2 */}
        <div className='flex items-start justify-between gap-10'>
            <img className='w-24' src={netflix} alt="netflix" />
            <div>
                <p>Aug 2020 - Feb 2021</p>
                <h3 className="text-lg font-semibold">Full-stack developer</h3>
                <p className='mt-8 '>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
            </div>
        </div>
    </div>
  )
}

export default Experiences