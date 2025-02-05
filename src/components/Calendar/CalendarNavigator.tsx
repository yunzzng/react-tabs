import { FC, useContext, useMemo } from "react";
import { CalendarContext } from ".";
import { calendarNavigatorBaseCls } from "@consts/className";

interface CalendarNavigatorProps {
  className?: string;
}

const CalendarNavigator: FC<CalendarNavigatorProps> = ({ className }) => {
  const calendarContext = useContext(CalendarContext) ?? {
    currentDate: new Date(),
    setCurrentDate: () => {},
  };
  const { currentDate, setCurrentDate } = calendarContext;

  const handleNavigation = (direction: "previous" | "next") => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);

      if (direction === "previous") {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }

      return newDate;
    });
  };

  const calendarNavigatorCls = useMemo(() => {
    return className
      ? `${className} ${calendarNavigatorBaseCls}`
      : calendarNavigatorBaseCls;
  }, [className]);

  return (
    <div className={calendarNavigatorCls}>
      <div>현재 월: {currentDate.getMonth() + 1}월</div>
      <button onClick={() => handleNavigation("previous")}>prev</button>
      <button onClick={() => handleNavigation("next")}>next</button>
    </div>
  );
};

export default CalendarNavigator;
