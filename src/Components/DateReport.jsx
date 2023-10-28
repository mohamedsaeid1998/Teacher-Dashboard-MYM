
import { useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
const DateReport = () => {
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [Terms, setTerms] = useState([
    { term: "خريف ", value: "Fall 2023" },
    { term: "ربيع ", value: "Spring 2024" },
    { term: "صيف", value: "Summer 2024" },
  ]);
  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  // Function to handle the change in the selected term
  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  // Function to handle the change in the selected month
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div>
      <section className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-8">
        <div className="md:col-span-2 lg:col-span-2 ml-5 mr-8">
          <select
            id="termSelect"
            value={selectedTerm}
            onChange={handleTermChange}
            className="p-2 w-full   rounded-[9px] bg-white border border-white-200"
          >
            <option value="" disabled>
              الترم
            </option>
            {Terms.map((termOption, index) => (
              <option key={index} value={termOption.value}>
                {termOption.term} - {termOption.value}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2 lg:col-span-2 ml-5 mr-0">
          <select
            id="monthSelect"
            value={selectedMonth}
            onChange={handleMonthChange}
            className="p-2 w-full rounded-[9px] bg-white border border-white-200"
          >
            <option value="" disabled>
              الشهر
            </option>
            {months.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2 lg:col-span-3"></div>
        <div className="md:col-span-2 lg:col-span-1  py-[8px] pr-6 border border-white-200 rounded-[9px] text-primaryColor text-[22px] flex items-center w-[120px]">
          <span className="[font-family:'Open_Sans-Regular',Helvetica]  pl-2">
            طباعة
          </span>
          <AiOutlinePrinter  /> 
        </div>
      </section>
    </div>
  );
};

export default DateReport;
