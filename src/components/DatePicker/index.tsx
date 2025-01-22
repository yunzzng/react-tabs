import { FC, useMemo, useState } from "react";
import Calendar from "../Calendar";
import Popover from "../Popover";
import { DatePickerBaseCls } from "../../consts/className";

interface DatePickerProps {
  date: Date;
  onChangeDate: (date: Date) => void;
  className?: string;
}

// 날짜
const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
};

const DatePicker: FC<DatePickerProps> = ({ date, onChangeDate, className }) => {
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
            <a>
              {selectedDate
                ? `📅 ${formatDate(selectedDate)}`
                : "🗓️ Pick a date"}
            </a>
          )}
        </Popover.Trigger>
        <Popover.Content position="bottom-left">
          <Calendar value={selectedDate || date} onChange={handleDateChange}>
            <Calendar.Current />
            <Calendar.Navigator />
            <Calendar.Body />
          </Calendar>
        </Popover.Content>
      </Popover>
    </div>
  );
};

export default DatePicker;
