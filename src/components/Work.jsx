import React from "react";
import Img1 from "../assets/img1.png";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/img3.png";

const Work = () => {
  return (
    <div className="max-w-[1260px] mb-[60px] px-[16px] xl:px-0 mx-auto font-montserrat pt-[60px]">
      <h2 className="text-[30px] md:text-[40px] font-[400 mb-[20px]">Примеры наших работ:</h2>
      <div className="flex justify-between items-center gap-[10px] overflow-x-scroll lg:overflow-x-visible">
        <img src={Img1} alt="img1" className="w-[220px] lg:w-[400px] flex-shrink-0" />
        <img src={Img2} alt="img2" className="w-[220px] lg:w-[400px] flex-shrink-0" />
        <img src={Img3} alt="img3" className="w-[220px] lg:w-[400px] flex-shrink-0" />
      </div>
    </div>
  );
};

export default Work;
