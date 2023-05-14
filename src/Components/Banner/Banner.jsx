import React from 'react';
import searchIcon from './../../assets/icons/search-icon.png';
import mainFoodPlate from './../../assets/food-plate-main.png';
import foodPlate from './../../assets/food-plate.png';
import leaf from './../../assets/leaf.png';
import leaf2 from './../../assets/leaf-2.png';
import success from './../../assets/icons/success-icon.png';

const Banner = () => {
    return (
        <header className='banner md:h-[800px] flex items-center relative'>
            <img className='absolute -top-20 hidden md:flex' src={leaf} alt="" />
            <div className='px-10 md:px-20 2xl:px-48 flex flex-col-reverse md:flex-row items-center'>
                <div className='pb-24 md:pb-0 md:w-1/2 flex flex-col gap-7 '>
                    <h2 className='banner-heading text-[40px] leading-[40px] lg:text-[65px] lg:leading-[85px]'>Order food online from your favourite local restaurants.</h2>
                    <p className='text-2xl font-semibold uppercase' style={{ color: '#676767' }}>Freshly made food delivered to your door.</p>
                    <div className='banner-search-container'>
                        <p className='search-box-input-color hidden lg:block'></p>
                        <input className='search-input' type="text" placeholder='Enter your location' />
                        <button className='btn primary-btn rounded-full flex gap-3 h-16 px-8'>
                            <img className='text-white' src={searchIcon} alt="search-icon" />
                            <span>Search</span>
                        </button>
                    </div>
                </div>
                <div className='pt-40 md:pt-0 md:w-1/2 '>
                    <div className='flex justify-center relative'>
                        <div>
                            <img className='z-40 mainFoodPlate' src={mainFoodPlate} alt="food-plate" />
                        </div>
                        <div className='absolute bg-white p-5 -top-16'>
                            <div className='flex gap-2'>
                                <img className='h-10 w-10' src={success} alt="success" />
                                <p className='text-4xl font-semibold orange-color'>200k+</p>
                            </div>
                            <p className='text-xl font-semibold' style={{ color: '838383' }}>People Delivered</p>
                        </div>
                        <img className='absolute -left-6 top-0 -z-10' src={foodPlate} alt="food-plate" />
                        <img className='absolute -right-10 -top-20 -z-10' src={leaf2} alt="leaf" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner;