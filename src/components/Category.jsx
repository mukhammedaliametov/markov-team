import React from "react";
import Card1 from "../assets/category1.png";
import Card2 from "../assets/category2.png";
import Card3 from "../assets/category3.png";
import Card4 from "../assets/category4.png";
import Card5 from "../assets/category5.png";
import Card6 from "../assets/category6.png";
import Card7 from "../assets/category7.png";

const Category = () => {
  const categoryItems = [
    {
      name: "Верх",
      info: "Футболки, майки",
      img: Card1,
    },
    {
      name: "Низ",
      info: "Велосипедки, леггинсы",
      img: Card2,
    },
    {
      name: "Обувь",
      info: "Штангетки",
      img: Card3,
    },
    {
      name: "Инвентарь",
      info: "Магнезия для гиревого спорта ",
      img: Card4,
    },
    {
      name: "Экипировка",
      info: "Ремни для гиревого спорта и тяжелоатлетические ",
      img: Card5,
    },
    {
      name: "Маски",
      info: "Медицинские с готовым и индивидуальным дизайном",
      img: Card6,
    },
  ];

  return (
    <div className="max-w-[1260px] mb-[60px] px-[16px] xl:px-0 mx-auto font-montserrat pt-[60px]">
      <h2 className="text-[30px] md:text-[40px] font-[400 mb-[20px]">Что вы ищите?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-[100%] lg:w-[80%] lg:mx-auto">
        {categoryItems.map((itm, idx) => (
          <div
            key={idx}
            className="w-[320px] shadow-lg rounded-[20px] flex justify-between flex-col"
          >
            <div className="px-[30px] pt-[40px]">
              <h3 className="text-[32px] font-[400] mb-[10px]">{itm.name}</h3>
              <p>{itm.info}</p>
            </div>
            <img src={itm.img} alt="" className="mt-[10px] pb-[20px]" />
          </div>
        ))}
      </div>
      <div className="w-full md:w-[80%] px-[20px] md:px-[40px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between shadow-lg mt-[20px] rounded-[20px] py-[20px]">
        <div className="">
          <h3 className="text-[28px] font-[600]">Командная форма на заказ</h3>
          <p className="mt-[10px] mb-[20px]">
            Разрабатываем дизайн и шьём на заказ футбольную, волейбольную,
            гиревую форму, а также тяжелоатлетические костюмы и гимнастические
            купальники.
          </p>
          <ul className="list-disc ml-[20px]">
            <li>Нанесения логотипа</li>
            <li>Печать номера и фамилии</li>
            <li>Разработка дизайна формы</li>
          </ul>
          <button className="block w-full bg-[#F2F2F2] py-[10px] px-[25px] text-[18px] font-[400] rounded-[25px] cursor-pointer font-montserrat mt-[20px] shadow-lg shadow-[#0000005b]">
            Узнать подробнее
          </button>
        </div>
        <img src={Card7} alt="card_7" className="w-[320px]" />
      </div>
    </div>
  );
};

export default Category;
