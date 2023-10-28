import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getStudentsData } from '../Store/Features/Students/GetStudentsSlice'


const StudentsTable = () => {

  let dispatch = useDispatch()

  const [tableHeader, setTableHeader] = useState([
    { title: "الاسم بالكامل" },
    { title: "السن" },
    { title: "الصف" },
    { title: "المدرس" },
    { title: "الحضور" },
    { title: "الدرجات" },
    { title: "المصاريف" },
    { title: "هاتف ولي الامر" },
  ])

  const [getTableData, setTableData] = useState([])

  const checking = () => {
    const checkBoxes = document.querySelectorAll('.check')
    checkBoxes.forEach((ele) =>
      ele.toggleAttribute("checked")
    )
  }

const getData = async () => {
    // @ts-ignore
    let element = await dispatch(getStudentsData())
    setTableData(element.payload)
  }



  useEffect(() => {
    getData()
  }, [])

  return <>
    <table className='bg-white text-center '>
      <thead>
        <tr className=' table-tr'>
          <th className='table-td '><input className='w-5 h-5 my-[9px]' type="checkbox" onClick={checking} /></th>
          {tableHeader.map((ele) => <th key={ele.title} className='table-td center'><span className='table-text'>{ele.title}</span></th>
          )}
        </tr>

      </thead>

      <tbody >
        {getTableData.map((student) => <tr key={student.id} className='table-tr'>
          <td className='table-td px-10 '><input className='w-5 h-5 my-[9px] check' type="checkbox" /></td>
          <td className='table-td center'><span className='table-text'>{student.studentName}</span></td>
          <td className='table-td center'><span className='table-text'>{student.age}</span></td>
          <td className='table-td center'><span className='table-text'>{student.year}</span></td>
          <td className='table-td center'><span className='table-text'>{student.teacher}</span></td>
          <td className='table-td center'><span className='table-text'>جديد</span></td>
          <td className='table-td center'><span className='table-text'>جديد</span></td>
          <td className='table-td center'><span className='table-text'>جديد</span></td>
          <td className='table-td center'><span className='table-text'>{student.phone}</span></td>
        </tr>
        )}

      </tbody>

    </table>

  </>

}  
export default StudentsTable
