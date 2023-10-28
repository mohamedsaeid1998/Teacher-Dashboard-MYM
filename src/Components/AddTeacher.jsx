import { AiOutlinePlus } from "react-icons/ai";
const AddTeacher = () => {
  return (
    <>
      <div className="bg-[#EFEFEF] p-4 text-center rounded-[10px] h-full flex flex-col justify-center items-center">
        <div className="text-primaryColor text-[50px]">
          <AiOutlinePlus />
        </div>
        <h4 className="mt-2">اضافة مدرس</h4>
      </div>
    </>
  );
};

export default AddTeacher;
