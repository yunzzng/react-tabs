import { FC, useContext, useMemo } from "react";
import { CalendarContext } from ".";
import { calendarBodyBaseCls } from "@consts/className";

interface CalendarBodyProps {
  className?: string; 
}

const CalendarBody : FC<CalendarBodyProps> = ({ className }) => {
  const { currentDate, setCurrentDate } = useContext(CalendarContext);

  const getDatesForCurrentMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const startDay = new Date(year, month, 1); // 첫째 날
    const endDay = new Date(year, month + 1, 0); // 마지막 날

    // 0:일요일, 6:토요일
    const startDayOfWeek = startDay.getDay();
    const endDayOfWeek = endDay.getDay();
    
    const dates = [
      // 이전 월의 날짜
      ...Array.from({ length: startDayOfWeek }, (_, i) => ({
        date: new Date(year, month, -(startDayOfWeek - i - 1)),
      })),
      // 현재 월의 날짜
      ...Array.from({ length: endDay.getDate() }, (_, i) => ({
        date: new Date(year, month, i + 1),
      })),
      // 다음 월의 날짜
      ...Array.from({ length: 6 - endDayOfWeek }, (_, i) => ({
        date: new Date(year, month + 1, i + 1),
      })),
    ];
  
    return dates;
  };

  const dates = getDatesForCurrentMonth();

  const handleDateClick = (selectedDate: Date) => {
    setCurrentDate(selectedDate);
  };

  const calendarBodyCls = useMemo(() => {
    return className ? `${className} ${calendarBodyBaseCls}` : calendarBodyBaseCls;
}, [className]);

  return (
    <div className={calendarBodyCls}>
      {dates.map(({ date }, index) => (
        <div key={index} onClick={() => handleDateClick(date)}>
          {date.getDate()}
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;