
import { TbArrowWaveLeftUp } from "react-icons/tb";
const NumberStudent = ({ title, numberStudent, precentStudent }) => {
  return (
    <>
      <div className=" text-center lg:text-right md:col-span-4 lg:col-span-6 xl:col-span-4 ml-5 mr-8 bg-white rounded-[10px] justify-center p-10 border border-white-200">
        <h5 className="text-[20px]">{title}</h5>
        <div className="flex justify-center lg:justify-start items-center py-2">
          <span className="text-[18px] text-primaryColor font-bold">
            {numberStudent}
          </span>
          <span className="mr-2">{` ${precentStudent}%`}+</span>
          <span className="mt-1 mx-1">
            <TbArrowWaveLeftUp />
          </span>
        </div>
      </div>
    </>
  );
};

export default NumberStudent;
