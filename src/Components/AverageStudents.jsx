
import { useState } from "react";
import { BarChart, Bar, Cell, XAxis, ResponsiveContainer } from "recharts";
const AverageStudents = ({ title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // data of chart
  const data = [
    {
      day: "M",
      uv: 67,
    },
    {
      day: "T",
      uv: 35,
    },
    {
      day: "W",
      uv: 100,
    },
    {
      day: "T",
      uv: 74,
    },
    {
      day: "F",
      uv: 65,
    },
    {
      day: "S",
      uv: 85,
    },
    {
      day: "S",
      uv: 70,
    },
  ];

  const handleClick = (data, index) => {
    setActiveIndex(index);
  };

  const activeItem = data[activeIndex];

  return (
    <div className="lg:col-span-12 xl:col-span-6 gap-6   bg-white rounded-[10px] justify-center p-10 border border-white-200 ">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-6 lg:grid-cols-12">
        <div className="md:col-span-6 lg:col-span-5 font-sans">
          <p className="text-[20px] py-2">{title}</p>
          <p className="text-[15px] text-gray-400">تقرير الشهرى</p>
          <p className="text-[22] text-primaryColor font-bold py-2">{` % ${activeItem.uv}`}</p>
          <p className="text-[18px] py-2">السنة السابقة</p>
          <p className="text-[15px] text-gray-600">50%</p>
        </div>
        {/* chart */}
        <div className="md:col-span-6 lg:col-span-7">
          <div className="w-full">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <Bar
                  dataKey="uv"
                  onClick={handleClick}
                  radius={[5, 5, 5, 5]}
                  barSize={10}
                >
                  {data.map((entry, index) => (
                    <Cell
                      cursor="pointer"
                      fill={index === activeIndex ? "#1246AC" : "#D9D9D9"}
                      key={`cell-${index}`}
                    />
                  ))}
                </Bar>
                <XAxis dataKey="day" axisLine={false} tickLine={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AverageStudents;
