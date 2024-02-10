import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import S from "./CalendarCustom.module.scss";
import { forwardRef, useState } from "react";
import calIcon from "../../assets/images/calendarIcon.svg";

export default function CalendarCustom() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 캘린더 인풋 커스텀
  const CalCustomInput = forwardRef(
    ({ value, onClick }: { value: any; onClick: any }, ref) => (
      <>
        <input
          type="text"
          className="input-text input-border"
          onClick={onClick}
          value={value === null ? "" : value}
          readOnly
          placeholder="입학년월"
        />
        <div className={S.cal_icon} onClick={onClick}>
          <img src={calIcon} alt="달력" />
        </div>
      </>
    )
  );

  return (
    <>
      <main className="container wrapper">
        <h2 className="h2">React Datepicker 커스텀</h2>
        <DatePicker
          dateFormat="yyyy.MM" // 날짜 형태
          shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
          // showMonthYearPicker
          // showMonthDropdown
          minDate={new Date("1900-01-01")} // minDate 이전 날짜 선택 불가
          maxDate={new Date()} // maxDate 이후 날짜 선택 불가
          yearDropdownItemNumber={100}
          showMonthYearPicker
          onChange={(date: any) => setSelectedDate(date)}
          selected={selectedDate}
          customInput={
            <CalCustomInput value="selectedEnterDate" onClick={() => {}} />
          }
        />
      </main>
    </>
  );
}
