import React, { useState } from "react";
import { GiBasket } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
    const [nav, setNav] = useState();
    const handleClick = () => setNav(!nav);
  const navItems = [
    { name: "О нас", link: "#" },
    { name: "Доставка", link: "#" },
    { name: "Оплата", link: "#" },
    { name: "Отзывы", link: "#" },
    { name: "Вопросы", link: "#" },
    { name: "ОПТ", link: "#" },
    { name: "Услуги", link: "#" },
  ];
  return (
    <div className="font-montserrat">
      <div className="max-w-[1260px] mx-auto xl:px-0 px-[16px] flex items-center justify-between py-[10px]">
        <p className="hidden md:block">Режим работы: 10.00-20.00</p>
        <div className="flex gap-[20px]">
          <a href="tel: 8(499)300-49-49" className="flex items-center gap-[8px] sm:gap-[10px] text-[12px] sm:text-[16px]">
            <span className="hidden sm:block">Телефон:</span> <FaPhoneAlt className="block sm:hidden text-[15px]" /> <span className="font-[600]">8(499)300-49-49</span>
          </a>
          <a href="#" className="hidden lg:block">Заказать обратный звонок</a>
        </div>
        <a href="mailto: info@markov-tram.ru" className="flex items-center gap-[8px] sm:gap-[10px] text-[12px] sm:text-[16px]">
           <span className="hidden sm:block">Почта:</span> <IoMdMail className="block sm:hidden text-[16px]" /> <span className="font-[600]">info@markov-tram.ru</span>
        </a>
      </div>
      <div className="bg-bright-gray">
        <div className="max-w-[1260px] mx-auto xl:px-0 px-[16px] flex items-center justify-between py-[20px]">
          <nav className="hidden md:flex gap-[20px] rounded-[25px] bg-white border-2 px-[20px] py-[5px]">
            {navItems.map((itm, idx) => {
              return (
                <a key={idx} href={itm.link} className="text-[16px] lg:text-[20px]">
                  {itm.name}
                </a>
              );
            })}
          </nav>
          <div onClick={handleClick} className="block md:hidden text-[22px]">
            {nav ? <IoClose /> : <FiMenu />}
          </div>
          <div className="flex flex-col items-end">
            <span className="font-[500] text-[12px] lg:text-[14px] xl:mb-[-5px]">
              Язык сайта: EN/RU
            </span>
            <a href="tel: 8(499)300-49-49" className="text-[16px] lg:text-[20px] font-[500]">
              8(499)300-49-49
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1260px] mx-auto xl:px-0 px-[16px] flex items-center justify-between py-[10px]">
        <div className="text-[16px] lg:text-[20px] font-[500] flex gap-[20px] overflow-x-scroll lg:overflow-x-visible">
          <a href="#" className="flex-shrink-0">Каталог одежды</a>
          <a href="#" className="flex-shrink-0">Экипировка</a>
          <a href="#" className="flex-shrink-0">Форма под заказ</a>
        </div>
        <div className="flex items-center gap-[20px]">
          <button className="hidden lg:block border-1 border-[#0000005d] bg-primary-gray py-[5px] px-[10px] text-[19px] font-[500] rounded-[25px] cursor-pointer">Создать свой дизайн</button>
          <button className="flex gap-[10px] items-center border-1 border-[#0000005d] bg-primary-gray py-[5px] px-[10px] text-[16px] lg:text-[19px] font-[500] rounded-[25px] cursor-pointer ml-[10px]">
            <GiBasket /> Корзина
          </button>
        </div>
      </div>
      <div className={`absolute top-[120px] bg-white w-full transition-all duration-500 ${nav ? 'left-0' : 'left-[-100%]'}`}>
        <nav className="flex flex-col gap-[12px] py-[20px] px-[16px]">
            {navItems.map((itm, idx) => (
                <a key={idx} href={itm.link} className="border-b border-[#0000003b] pb-[12px] last:border-0">{itm.name}</a>
            ))}
            <button className="border-1 border-[#0000005d] bg-primary-gray py-[5px] px-[10px] text-[19px] font-[500] rounded-[25px] cursor-pointer mt-[10px]">Создать свой дизайн</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
