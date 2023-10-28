const SingleTeacher = ({ image, TeacherName, classTeacher }) => {
  return (
    <div className="bg-[#EFEFEF] text-black p-4 text-center rounded-[10px] h-full">
      <div className="w-8/12 mx-auto overflow-hidden max-w-md max-h-md">
        <img
          src={image}
          alt={TeacherName}
          className="w-full h-full  object-cover"
        />
      </div>
      <h4 className="mt-2">الاسم _ {TeacherName}</h4>
      <h4 className="mt-2">الصفوف {classTeacher}</h4>
    </div>
  );
};

export default SingleTeacher;
