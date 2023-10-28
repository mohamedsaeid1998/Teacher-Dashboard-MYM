import './Home.module.scss'
// @ts-ignore
import arrow from '../../Assets/images/vector.svg'
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getDataProfit } from "../../Store/Features/Reports/StatusProfit";
import { MainCard, PaymentsChart, TotalProfitChart } from '@/Components';
import { AiOutlineLeft } from "react-icons/ai";

const Home = () => {



  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(getDataProfit());
  }, [dispatch])


  return (
    <>
      <main className='mx-7 my-2 mb-4'>
        <section className='grid lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-3'>
          <MainCard />
        </section>

        <div className='grid grid-cols-12 gap-4 mb-6'>

          <div className='h-max bg-white col-span-12  xl:col-span-7  rounded-[10px] mt-4 p-4 pb-0'>

            <div className='flex justify-between items-center  px-4 '>
              <span className='text-[16px] font-normal'>الربح الكلي</span>
              <span className='text-primaryColor text-[18px] font-semibold '>522,450 ج</span>
            </div>

            <hr className='my-6' />
            <TotalProfitChart />
          </div>




          <div className=' bg-white px-4 col-span-12 xl:col-span-5 border-b border-stone-300 rounded-[10px] mt-4'>

            <span className='inline-block p-4 text-[18px]' >حالة الدفع</span>

            <hr className='my-2' />

            <PaymentsChart />
          </div>

        </div>


        <div className='grid grid-cols-12  gap-4 '>

          <div className='col-span-12 xl:col-span-7 bg-white p-3 flex flex-col gap-1 border border-stone-300 rounded-lg  '>

            <div className='flex justify-between '>
              <span className="text-style h-2 w-fit ">احدث التعليقات والشكاوي</span>
              <span className='flex items-center  text-primaryColor'> الكل <span className='text-xs'><AiOutlineLeft/></span></span>
            </div>
            <p >محمود محمد (طالب في الصف الثاني الثانوي)</p>
            <span className='text-[16px] tracking-[0.3px]  opacity-75'>شكوي</span>
            <p>محمود محمد (طالب في الصف الثاني الثانوي)</p>
            <span className='text-[16px] tracking-[0.3px]  opacity-75'>شكوي</span>

          </div>


          <div className='col-span-12 xl:col-span-5 bg-white p-3 flex flex-col  gap-6 border border-stone-300 rounded-lg  '>

            <div className='flex flex-col gap-8'>

              <span className="text-style h-2 ">عدد المدرسين</span>
              <div className='flex  items-center h-4 '>
                <span className='text-primaryColor text-[24px] font-semibold tracking-[0.42px] inline-block ml-[8px]'>16</span>
                <span className='text-[14px] leading-[18px] ml-[6px] h-[14px]'>11.01%+</span>
                <img src={arrow} alt="arrow" />
              </div>

            </div>

            <div className='flex flex-col gap-7'>
              <span className='text-style text-[18px] h-[8px]'>السنه السابقه</span>
              <div className='flex items-center'>
                <span className='text-[18px] tracking-[0.3px]  opacity-75 '>14</span>
              </div>

            </div>

          </div>
        </div>



      </main>

    </>
  );
};

export default Home;
