import {
  createContext,
  FC,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
  useMemo,
} from "react";
import CalendarBody from "./CalendarBody";
import CalendarCurrent from "./CalendarCurrent";
import CalendarNavigator from "./CalendarNavigator";
import { calendarBaseCls } from "@consts/className";

interface CalendarContextProps {
  currentDate: Date;
  setCurrentDate: Dispatch<SetStateAction<Date>>;
}

interface CalendarCompoundProps {
  Current: typeof CalendarCurrent;
  Navigator: typeof CalendarNavigator;
  Body: typeof CalendarBody;
}

const CalendarContext = createContext<CalendarContextProps>({
  currentDate: new Date(),
  setCurrentDate: () => {},
});

interface CalendarProps {
  children: ReactNode;
  defaultDate?: Date;
  className?: string;
  onChange?: (currentDate: Date) => void;
  value?: Date;
}

const Calendar: FC<CalendarProps> & CalendarCompoundProps = ({
  value,
  children,
  defaultDate = new Date(),
  className,
  onChange,
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(value || defaultDate);

  useEffect(() => {
    if (value) {
      setCurrentDate(value);
    }
  }, [value]);

  const contextValue = useMemo(
    () => ({
      currentDate,
      setCurrentDate,
    }),
    [currentDate]
  );

  useEffect(() => {
    if (onChange) {
      onChange(currentDate);
    }
  }, [currentDate, onChange]);

  const calendarCls = useMemo(() => {
    return className ? `${className} ${calendarBaseCls}` : calendarBaseCls;
  }, [className]);

  return (
    <CalendarContext.Provider value={contextValue}>
      <div className={calendarCls}>{children}</div>
    </CalendarContext.Provider>
  );
};

Calendar.Current = CalendarCurrent;
Calendar.Navigator = CalendarNavigator;
Calendar.Body = CalendarBody;

export default Calendar;
export { CalendarContext };
