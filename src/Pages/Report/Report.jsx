import { AverageStudents, DateReport, NumberStudent, PaymentsChart, TotalProfitChart } from '@/Components'
import './Report.module.scss'


const Report = () => {

  const dataItems = [
    {
      title: "العدد الكلى للطلاب",
      numberStudent: 143.624,
      precentStudent: 11.01,
    },
    { title: "الطلاب الجدد", numberStudent: 143.624, precentStudent: 11.01 },
    {
      title: "الطلاب الراحلين ",
      numberStudent: 143.624,
      precentStudent: 11.01,
    },
  ]

  return <>
    <div className="container mb-4 ">
      {/* date Component */}
      <DateReport />
      {/* statistics of students */}
      <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-3 mt-7">
        {dataItems.map((item, index) => (
          <NumberStudent
            key={index}
            title={item.title}
            numberStudent={item.numberStudent}
            precentStudent={item.precentStudent}
          />
        ))}
      </section>
      {/* Average of Student */}
      <section className="grid grid-cols-1 ml-5 mr-8 lg:grid-cols-12 gap-3 mt-6 ">
        <AverageStudents title={"متوسط حضور الطلاب"} />
        <AverageStudents title={"متوسط درجات الطلاب "} />
      </section>
      {/* payments */}
      <section className=" grid grid-cols-1 xl:grid-cols-12 mt-6 gap-3 ">
        {/* Profit chart */}

        <div className='h-max bg-white col-span-12  xl:col-span-7  rounded-[10px]  p-4 mr-8 '>

          <div className='flex justify-between items-center  px-4 '>
            <span className='text-[16px] font-normal'>الربح الكلي</span>
            <span className='text-primaryColor text-[18px] font-semibold '>522,450 ج</span>
          </div>
          <hr className='my-6' />
          <TotalProfitChart />
        </div>
        {/* PaymentsChart */}
        <div className=' bg-white px-4 col-span-12 xl:col-span-5 border-b border-stone-300 rounded-[10px] ml-5 mr-8'>

          <span className='inline-block p-4 text-[18px]' >حالة الدفع</span>

          <hr className='my-2' />

          <PaymentsChart />
        </div>
      </section>
    </div>
  </>
}

export default Report