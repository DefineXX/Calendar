import PropTypes from "prop-types";

import generateCalendar from "./generateCalender";

import * as S from "./MovieCalendar.styled";

const MovieCalendar = ({ year, month }) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const calendarPoster = {
    "2025-02-05": [
      {
        title: "노트북(Notebook)",
        poster:
          "https://i.pinimg.com/736x/c1/e0/bb/c1e0bb8f0e87ab4a551691229f4db6e9.jpg",
      },
    ],
    "2025-02-10": [
      {
        title: "비긴 어게인(Begin Again)",
        poster:
          "https://i.pinimg.com/736x/f3/d1/0c/f3d10cd3cc45ed62595ce48c166a1bf1.jpg",
      },
    ],
    "2025-01-26": [
      {
        title: "베테랑",
        poster:
          "https://i.pinimg.com/736x/a6/de/62/a6de62288b44c12a2b75c39deb264f53.jpg",
      },
    ],
  };

  return (
    <S.MovieCalendarContainer>
      <S.MovieCalendarDayList>
        {daysOfWeek.map((day) => (
          <S.MovieCalendarDayItem key={day}>
            <S.MovieCalendarDay $sat={day === "Sat"} $sun={day === "Sun"}>
              {day}
            </S.MovieCalendarDay>
          </S.MovieCalendarDayItem>
        ))}
      </S.MovieCalendarDayList>

      {/* Calendar Grid */}
      <S.MovieCalendarGrid>
        {year &&
          month &&
          generateCalendar(year, month).map((day, index) => {
            const isPosterExist = calendarPoster[day.fullDate];
            const posterUrl = isPosterExist ? isPosterExist[0].poster : null;

            return (
              <S.MovieCalendarGridItem key={index}>
                <S.MovieCalendarUnit
                  $posterUrl={posterUrl}
                  $prevNextMonth={day.monthType !== "current"}
                >
                  {day.date}
                </S.MovieCalendarUnit>
              </S.MovieCalendarGridItem>
            );
          })}
      </S.MovieCalendarGrid>
    </S.MovieCalendarContainer>
  );
};

MovieCalendar.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  movieCalendar: PropTypes.object.isRequired,
};

export default MovieCalendar;
