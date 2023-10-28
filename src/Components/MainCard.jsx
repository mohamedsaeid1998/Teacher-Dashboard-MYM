import { useState } from "react";
// @ts-ignore
import arrow from '../Assets/images/vector.svg'

const MainCard = () => {

  const [cards, setCards] = useState([
    { title: 'عدد الطلاب', mainNum: 143.624, pre: "11.01%+", subNum: 113.452 },
    { title: 'متوسط الدرجات', mainNum: "55/100", pre: "2.01%+", subNum: "50/100" },
    { title: 'نسبه الحضور', mainNum: "30%", pre: "2.01%+", subNum: "28%" },
  ])
  
  return <>
  
  {cards.map((card) => <div key={card.title} className='bg-white p-3 flex flex-col  gap-6 border border-stone-300 rounded-lg  '>

<div className='flex flex-col gap-6'>

  <span className="text-style h-2 ">{card.title}</span>
  <div className='flex items-center h-4 '>
    <span className='text-primaryColor text-[24px] font-semibold tracking-[0.42px] inline-block ml-[8px] '>{card.mainNum}</span>
    <span className='text-[14px] leading-[18px] ml-[6px] h-[14px]'>{card.pre}</span>
    <img src={arrow} alt="arrow" />
  </div>

</div>

<div className='flex flex-col gap-6'>
  <span className='text-style text-[18px] h-[8px]'>الشهر السابق</span>
  <div className='flex items-center'>
    <span className='text-[18px] tracking-[0.3px]  opacity-75 '>{card.subNum}</span>
  </div>

</div>

</div>
  )}
  </>
}

export default MainCard