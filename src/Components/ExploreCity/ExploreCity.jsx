import React from 'react';
import rightArrow from './../../assets/icons/right-arrow.png';
import rider from './../../assets/rider.png';

const ExploreCity = () => {
  return (
    <div className='explore-city '>
      <div className='px-10 md:px-20 2xl:px-48 py-20'>
        <div className='flex flex-col-reverse md:flex-row items-center'>
          <div className='md:w-1/2 flex flex-col gap-5'>
            <h2 className='city-explore-heading primary-color text-5xl'>Explore your favourite city’s food.</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</p>

            <div>
              <button className='btn primary-btn rounded-full flex gap-3 px-8'>
                <span>Explore</span>
                <img className='text-white' src={rightArrow} alt="search-icon" />
              </button>
            </div>
          </div>
          <div className='md:w-1/2'>
            <div className="city relative">
              <img className='rider absolute bottom-0' src={rider} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreCity