import PropTypes from "prop-types";
import { useRef, useState } from "react";

import DatePickerDropdown from "./Dropdown/DatePickerDropdown";
import { DatePickerArrow } from "../../icons/Arrow";

import * as S from "./DatePicker.styled";
import useClickOutside from "../../hooks/useClickOutside";

const DatePicker = ({
  year,
  month,
  yearList,
  monthList,
  handleSelectedYear,
  handleSelectedMonth,
}) => {
  const monthPickerRef = useRef(null);
  const yearPickerRef = useRef(null);

  useClickOutside(monthPickerRef, () => setIsMonthPickerOpen(false));
  useClickOutside(yearPickerRef, () => setIsYearPickerOpen(false));

  const [isYearPickerOpen, setIsYearPickerOpen] = useState(false);
  const [isMonthPickerOpen, setIsMonthPickerOpen] = useState(false);

  const handleYearPicker = () => setIsYearPickerOpen(!isYearPickerOpen);
  const handleMonthPicker = () => setIsMonthPickerOpen(!isMonthPickerOpen);

  return (
    <S.DatePickContainer>
      <S.YearPickerContainer ref={yearPickerRef}>
        <S.YearPickerButton onClick={handleYearPicker}>
          {year}
          <S.DatePickerArrowBox>
            <DatePickerArrow />
          </S.DatePickerArrowBox>
        </S.YearPickerButton>
        {isYearPickerOpen && (
          <DatePickerDropdown
            yearOrMonthList={yearList}
            handleSelectYearOrMonth={handleSelectedYear}
            handleDropdownClose={handleYearPicker}
          />
        )}
      </S.YearPickerContainer>

      <S.MonthPickerContainer ref={monthPickerRef}>
        <S.MonthPickerButton onClick={handleMonthPicker}>
          {month}
          <S.DatePickerArrowBox>
            <DatePickerArrow />
          </S.DatePickerArrowBox>
        </S.MonthPickerButton>
        {isMonthPickerOpen && (
          <DatePickerDropdown
            yearOrMonthList={monthList}
            handleSelectYearOrMonth={handleSelectedMonth}
            handleDropdownClose={handleMonthPicker}
          />
        )}
      </S.MonthPickerContainer>
    </S.DatePickContainer>
  );
};

DatePicker.propTypes = {
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  yearList: PropTypes.array.isRequired,
  monthList: PropTypes.array.isRequired,
  handleSelectedYear: PropTypes.func,
  handleSelectedMonth: PropTypes.func,
};

export default DatePicker;
