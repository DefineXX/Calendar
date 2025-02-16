import { useState } from "react";
import { format, subYears } from "date-fns";

import DatePicker from "../components/DatePicker/DatePicker";
import MovieCalendar from "../components/MovieCalendar/MovieCalendar";

const MovieCalendarPage = () => {
  const yearList = Array.from({ length: 5 }, (_, index) => {
    return format(subYears(new Date(), index), "yyyy");
  });

  const monthList = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  // prop으로 넘겨줄 Month 값을 숫자로 변환하는 함수
  const convertMonthToNumber = (month) => {
    const index = monthList.indexOf(month);
    return index !== -1 ? index + 1 : undefined;
  };

  //  현재 날짜 기준으로 Date Picker 초기 값 설정
  const currentYear = format(new Date(), "yyyy"); // "2025"
  const currentMonth = format(new Date(), "MMM").toUpperCase(); // "Feb"

  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const handleSelectedYear = (year) => {
    setSelectedYear(year);
  };

  const handleSelectedMonth = (month) => {
    setSelectedMonth(month);
  };

  return (
    <>
      <DatePicker
        year={selectedYear}
        month={selectedMonth}
        yearList={yearList}
        monthList={monthList}
        handleSelectedYear={handleSelectedYear}
        handleSelectedMonth={handleSelectedMonth}
      />
      <MovieCalendar
        year={Number(selectedYear)}
        month={convertMonthToNumber(selectedMonth)}
      />
    </>
  );
};

export default MovieCalendarPage;
