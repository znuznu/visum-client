import { DiaryDay as DiaryDayType, Month } from 'models/diary';
import DiaryDay from 'components/DiaryYear/DiaryDay';
import MonthBadge from './MonthBadge';
import { StyledTableData } from './style';

type DiaryMonthProps = {
  month: Month;
  days: DiaryDayType[];
};

const DiaryMonth = ({ month, days }: DiaryMonthProps) => {
  return (
    <>
      {days.map((day, index) => (
        <tr key={`day-${index}`}>
          <StyledTableData>
            {index === 0 ? <MonthBadge month={month} /> : null}
          </StyledTableData>
          <DiaryDay
            day={day.day}
            movieId={day.movie.id}
            title={day.movie.title}
            grade={day.movie.grade}
            isFavorite={day.movie.isFavorite}
            isRewatch={day.movie.isRewatch}
            posterUrl={day.movie.posterUrl}
            releaseDate={day.movie.releaseDate}
            reviewId={day.movie.reviewId}
          />
        </tr>
      ))}
    </>
  );
};

export default DiaryMonth;
