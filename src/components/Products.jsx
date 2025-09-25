import React from 'react';
import Card1 from '../assets/category4.png';

const Products = () => {
    const productItems = [
        {
            name: 'Магнезия жесткая',
            price: '750 ₽ ',
            img: Card1,
            off: 'Скидка 10%',
            info: 'Осталось 3 шт.'
        },
         {
            name: 'Магнезия жесткая',
            price: '750 ₽ ',
            img: Card1,
            off: 'Скидка 10%',
            info: 'Осталось 3 шт.'
        },
    ]
    return (
        <div>
            <div>
                <h2>Популярные товары</h2>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Products;