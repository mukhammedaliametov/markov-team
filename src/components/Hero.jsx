import React from 'react';
import Tshirts from '../assets/hero_tshirts.png';

const Hero = () => {
    return (
        <div className='max-w-[1260px] mb-[60px] px-[16px] xl:px-0 mx-auto flex flex-col-reverse md:flex-row items-left lg:items-center justify-between pt-[60px] font-montserrat'>
            <div className='mt-[45px] sm:mt-0'>
                <h1 className='text-[40px] sm:text-[65px] xl:text-[75px] font-[500]'>3=2</h1>
                <p className='text-[20px]/[30px] sm:text-[30px]/[40px] xl:text-[40px]/[50px] font-[500]'>Закажи три футболки, <br /> а заплати только за две</p>
                <button className='bg-primary-gray py-[5px] px-[15px] text-[18px] sm:text-[22px] font-[400] rounded-[25px] cursor-pointer font-montserrat mt-[20px]'>Перейти в каталог</button>
            </div>
            <div className='xl:mr-[8%]'>
                <img src={Tshirts} alt="tshirts" className='w-[400px] xl:w-[450px] mx-auto' />
            </div>
        </div>
    );
};

export default Hero;