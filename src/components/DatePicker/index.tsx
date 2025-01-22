import { FC, useMemo, useState } from "react";
import Calendar from "../Calendar";
import Popover from "../Popover";
import { DatePickerBaseCls } from "../../consts/className";

type PopoverPosition = "bottom-left" | "bottom-center" | "bottom-right";

interface DatePickerProps {
  date: Date;
  onChangeDate: (date: Date) => void;
  className?: string;
  triggerClassName?: string;
  calendarClassName?: string;
  calendarCurrentClassName?: string;
  calendarNavigatorClassName?: string;
  calendarBodyClassName?: string;
  popoverPosition?: PopoverPosition;
}

// 날짜
const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
};

const DatePicker: FC<DatePickerProps> = ({
  date,
  onChangeDate,
  className,
  triggerClassName,
  calendarClassName,
  popoverPosition = "bottom-left",
  calendarCurrentClassName,
  calendarNavigatorClassName,
  calendarBodyClassName,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); // 날짜 선택

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    onChangeDate(date);
  };

  const datePickerCls = useMemo(() => {
    return className ? `${className} ${DatePickerBaseCls}` : DatePickerBaseCls;
  }, [className]);

  return (
    <div className={datePickerCls}>
      <Popover>
        {/* 선택된 날짜가 없으면 문구, 선택된 날짜가 있으면 해당 날짜 */}
        <Popover.Trigger>
          {() => (
            <a className={triggerClassName}>
              {selectedDate
                ? `📅 ${formatDate(selectedDate)}`
                : "🗓️ Pick a date"}
            </a>
          )}
        </Popover.Trigger>
        <Popover.Content position={popoverPosition}>
          <Calendar
            value={selectedDate || date}
            onChange={handleDateChange}
            className={calendarClassName}
          >
            <Calendar.Current className={calendarCurrentClassName}/>
            <Calendar.Navigator className={calendarNavigatorClassName}/>
            <Calendar.Body className={calendarBodyClassName}/>
          </Calendar>
        </Popover.Content>
      </Popover>
    </div>
  );
};

export default DatePicker;
