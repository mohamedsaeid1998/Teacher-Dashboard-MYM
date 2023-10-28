import './Students.module.scss'
import { useState } from 'react'
import { AddStudentForm, StudentsTable } from '@/Components'
const Students = () => {

  const addStudent = () => {
    const form = document.querySelector('.mainCard')
    form.classList.remove('hidden')
    form.classList.add('flex')
  }

  const [icons, setIcons] = useState([
    { icon: <i onClick={addStudent} className="fa-solid fa-plus text-[25px] font-normal"></i> },
    { icon: <i className="fa-solid fa-pen text-[25px]  "></i> },
    { icon: <i className="fa-regular fa-trash-can text-[25px] "></i> },
  ])

  return <>
    <main className='mr-10'>

      <div className='center justify-between mr-4 ml-6 mb-6'>

        <h2 className='text-[22px] leading-[22px] h-5'>جميع الطلاب</h2>

        <div className='flex gap-6'>
          {icons.map((ele, index) => <button key={index} className=' w-10 h-10 p-3 rounded-[10px] bg-white center'>
            {ele.icon}
          </button>
          )}
        </div>

      </div>


      <div id="table-scroll">
        <StudentsTable />
      </div>

      <div className="mainCard hidden fixed top-0 left-0 right-0 bottom-0 justify-center items-center">
        <div className="contact bg-white  w-[1000px]   ">
          <AddStudentForm />
        </div>
      </div>

    </main>
  </>

}

export default Students
