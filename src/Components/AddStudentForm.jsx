import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import { postStudentsData } from '../Store/Features/Students/SendStudentsSlice'
const AddStudentForm = () => {

  let dispatch = useDispatch()

  const Schema = z.object({
    studentName: z.string().nonempty({ message: "Name is Required" }).trim().min(4, { message: "Name must be 4 or more" }),
    age: z.number().min(8, { message: "Student must be 8 years old or more" }).max(30, { message: "Student must be younger than 30 years" }).positive({ message: "number must be positive" }).int(),
    // age:z.string().max(2,{message:"Student must be younger than 30 years"}),
    classYear: z.string().nonempty({ message: "classYear is Required" }),
    teacher: z.string().nonempty({ message: "teacher is Required" }),
    phone: z.string().nonempty({ message: "phone number is Required" }).regex(/^01[0125][0-9]{8}$/, { message: "number must be a valid egyptian number" })
  })

  const { register, handleSubmit, control, reset, formState, formState: { isSubmitSuccessful, errors, isValid } } = useForm({
    defaultValues: {
      studentName: "",
      age: 0,
      classYear: "",
      teacher: "",
      phone: 0
    },
    resolver: zodResolver(Schema),
    mode: 'onChange'
  })

  const sendData = async (data) => {
    let { studentName, classYear, teacher, age, phone } = data
    phone = Number(phone)
    // @ts-ignore
    await dispatch(postStudentsData({ studentName, classYear, teacher, age, phone }))

  }

  const [year, setYear] = useState([
    { title: "الصف الاول", value: 'الاول' },
    { title: "الصف الثاني", value: 'الثاني' },
    { title: "الصف الثالث", value: 'الثالث' },
  ])

  const [teacher, setTeacher] = useState([
    { value: "محمد محمود", title: 'محمد محمود (رياضيات)' },
    { value: "السيد حسن", title: 'السيد حسن (كيمياء)' },
    { value: "مصطفي الجرف", title: 'مصطفي الجرف (رياضيات)' },
    { value: "سمير المجيدي", title: 'سمير المجيدي (احياء)' },
    { value: "ايمن محمد", title: 'ايمن محمد (فرنساوي)' },
    { value: "محمود محمد", title: 'محمود محمد (فيزياء)' },
    { value: "محمد حسن", title: 'محمد حسن (انجليزي)' },
    { value: "محمد ابراهيم", title: 'محمد ابراهيم (كيمياء)' },
    { value: "جمال سعيد", title: 'جمال سعيد (عربي)' },
  ])

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset()
    }
  }, [formState])

  const closeForm = () => {
    const form = document.querySelector('.mainCard')
    form.classList.add('hidden')
    form.classList.remove('flex')
  }

  return <>

    <form className='p-7 flex flex-col' onSubmit={handleSubmit(sendData)}>

      <label htmlFor="name" className='text-[20px] leading-[22px] font-semibold mb-3' >اسم الطالب</label>
      <input {...register("studentName")}
        // @ts-ignore
        control={control} id='name' className='mb-3 py-2 px-3  w-full rounded-lg border border-solid border-slate-800 bg-transparent' type="text" placeholder='ادخل اسم الطالب بالكامل' />
      {errors?.studentName ? <ul><li className='text-red-600 font-bold list-disc mr-4'>{errors.studentName?.message}</li></ul> : null}

      <label htmlFor="age" className='text-[20px] leading-[22px] font-semibold my-3' >السن</label>
      <input {...register("age", { valueAsNumber: true })}
        // @ts-ignore
        control={control} id='age' className='mb-3 py-2 px-3 w-full rounded-lg border border-solid border-slate-800 bg-transparent' type="number" placeholder='ادخل سن الطالب' />
      {errors?.age ? <ul><li className='text-red-600 font-bold list-disc mr-4'>{errors.age?.message}</li></ul> : null}

      <label htmlFor="classYear" className='text-[20px] leading-[22px] font-semibold my-3 pl-3' >الصف</label>
      <select {...register("classYear")}
        // @ts-ignore
        control={control} className='mb-3 py-2 px-3 w-full rounded-lg border border-solid border-slate-800 bg-transparent' id="classYear" placeholder='اختار الصف'>

        {year.map((ele, index) => <option key={index} value={ele.value}>{ele.title}</option>)}

      </select>
      {errors?.classYear ? <ul><li className='text-red-600 font-bold list-disc mr-4'>{errors.classYear?.message}</li></ul> : null}

      <label htmlFor="teacher" className='text-[20px] leading-[22px] font-semibold my-3 pl-3' >المدرس</label>
      <select {...register("teacher")}
        // @ts-ignore
        control={control} className={`py-2 px-3 w-full rounded-lg border border-solid border-slate-800 bg-transparent ${errors?.teacher?.message ? 'mb-3' : 'mb-6'}`} id="teacher" placeholder='اختار المدرس'>

        {teacher.map((ele, index) => <option key={index} value={ele.value}>{ele.title}</option>)}

      </select>
      {errors?.teacher ? <ul><li className='text-red-600 font-bold list-disc mr-4'>{errors.teacher?.message}</li></ul> : null}

      <label htmlFor="phone" className='text-[20px] leading-[22px] font-semibold my-3' >هاتف ولي الامر</label>
      <input {...register("phone")}
        // @ts-ignore
        control={control} id='phone' className={`py-2 px-3 w-full rounded-lg border border-solid border-slate-800 bg-transparent ${errors?.phone?.message ? 'mb-3' : 'mb-6'}`} type="tel" placeholder='ادخل رقم الهاتف' />
      {errors?.phone? <ul ><li className='text-red-600 font-bold mb-2 list-disc mr-4'>{errors.phone?.message}</li></ul> : null}

      <div className='flex gap-4 '>
        <button disabled={!isValid} className='bg-primaryColor disabled:bg-gray-500 text-white py-2 w-full rounded-xl' type='submit'>موافق</button>
        <button onClick={closeForm} className='bg-white text-primaryColor border border-primaryColor py-2 w-full rounded-xl' type='button'>الغاء</button>
      </div>

    </form>
  </>
}
export default AddStudentForm