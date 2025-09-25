import React from "react";

const Question = () => {
  return (
    <div className="bg-bright-gray flex justify-center items-center h-[50vh] flex-col font-montserrat">
      <h2 className="text-[25px] md:text-[40px] font-[500] mb-[10px]">
        Остались вопросы?
      </h2>
      <p className="mx-auto text-[18px] text-center">
        Заполните форму и менеджер свяжется <br /> с вами в ближайшее время.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-[10px] mt-[20px]">
        <button className="bg-white py-[5px] px-[20px] rounded-[20px] shadow-lg shadow-[#00000036] cursor-pointer">
          Задать вопрос
        </button>
        <button className="bg-white py-[5px] px-[20px] rounded-[20px] shadow-lg shadow-[#00000036] cursor-pointer">
          Заказать звонок
        </button>
      </div>
    </div>
  );
};

export default Question;
