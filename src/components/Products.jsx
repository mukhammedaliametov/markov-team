import React from 'react';
import Card1 from '../assets/category4.png';
import Card2 from '../assets/product2.png';
import Card3 from '../assets/product3.png';

const Products = () => {
    const productItems = [
        {
            name: 'Магнезия жесткая',
            price: '750 ₽',
            img: Card1,
            off: 'Скидка 10%',
            info: 'Осталось 3 шт.'
        },
         {
            name: 'Магнезия жесткая',
            price: '150 ₽ ',
            img: Card2,
            info: 'Бесплатная доставка'
        },
        {
            name: 'Женская футболка...',
            price: '950 ₽',
            img: Card3,
            off: 'Скидка 10%',
        },
    ]
    return (
        <div className='bg-bright-gray w-full min-h-[100vh] pb-[20px] md:pb-0'>
            <div className="max-w-[1260px] mb-[60px] px-[16px] xl:px-0 mx-auto font-montserrat pt-[60px]">
                <h2 className="text-[30px] md:text-[40px] font-[400 mb-[20px]">Популярные товары</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] lg:gap-[30px]'>
                    {productItems.map((item, index) => (
                        <div key={index} className='w-full lg:w-[80%]'>
                            <div className='bg-white relative flex justify-center items-center last:bg-[#F9F9F9] rounded-[10px] py-[20px] px-[10px] h-[370px]'>
                                <img src={item.img} alt="img" />
                                <div className='absolute top-0 right-0 inline-flex flex-col gap-[10px] p-[10px]'>
                                    <p className={`bg-primary-gray px-[20px] py-[5px] rounded-[20px] ${item.info === undefined ? 'hidden' : 'block'}`} >{item.info}</p>
                                <p className={`bg-primary-gray px-[20px] py-[5px] rounded-[20px] ${item.off === undefined ? 'hidden' : 'block'}`}>{item.off}</p>
                                </div>
                            </div>
                            <div className='mt-[10px]'>
                                <div className='flex items-center justify-between'>
                                    <p>{item.name}</p>
                                    <p className='text-[26px] font-[600]'>{item.price}</p>
                                </div>
                                <button className='bg-white py-[5px] px-[20px] rounded-[20px] shadow-lg shadow-[#00000036] cursor-pointer'>В корзину</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;