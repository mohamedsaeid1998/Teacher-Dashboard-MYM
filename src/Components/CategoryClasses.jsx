import { MdArrowDropDown } from "react-icons/md";

const CategoryClasses = ({ iconClass, Category }) => {
  return (
    <>
      <div className="flex items-center">
        <span className="text-4xl text-primaryColor">{iconClass} </span>
        <span className="ml-2 text-2xl font-bold">{Category}</span>
        <span>
          <MdArrowDropDown className="text-2xl mt-2" />
        </span>
      </div>
    </>
  );
};

export default CategoryClasses;
