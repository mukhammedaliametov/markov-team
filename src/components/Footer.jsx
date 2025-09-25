import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white font-montserrat">
      <div className="max-w-[1220px] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-black">
        <ul className="space-y-2">
          <li>Оплата</li>
          <li>Возврат</li>
          <li>Доставка</li>
          <li>Вопросы</li>
        </ul>
        <ul className="space-y-2">
          <li>О нас</li>
          <li>Услуги</li>
          <li>Отзывы</li>
          <li>Оптовый отдел</li>
        </ul>
        <ul className="space-y-2">
          <li>Каталог</li>
          <li>Размерная сетка</li>
          <li>Командная форма</li>
          <li>Создание дизайна формы</li>
        </ul>
        <div className="flex flex-col items-start space-y-3">
          <div className="text-right md:text-left">
            <p>8(499)300-49-49</p>
            <p className="underline cursor-pointer">
              info@markov-team.ru
            </p>
          </div>
          <div className="flex gap-3">
            <span className="w-7 h-7 bg-gray-300 rounded-full"></span>
            <span className="w-7 h-7 bg-gray-300 rounded-full"></span>
            <span className="w-7 h-7 bg-gray-300 rounded-full"></span>
            <span className="w-7 h-7 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
