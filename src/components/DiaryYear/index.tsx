import { DiaryMonth as DiaryMonthType } from '../../models/diary';

import { StyledThead } from './style';
import DiaryMonth from './DiaryMonth';
import useWindowSize from '../../hooks/useWindowSize';
import { S_BREAKPOINT_IN_PIXEL } from '../../styles/theme/breakpoints';

type DiaryYearProps = {
  months: DiaryMonthType[];
};

const DiaryYear = ({ months }: DiaryYearProps) => {
  const windowSize = useWindowSize();

  return (
    <table>
      <StyledThead>
        <tr>
          <th>Month</th>
          <th>Day</th>
          <th>Film</th>
          {windowSize.width >= S_BREAKPOINT_IN_PIXEL && (
            <>
              <th>Release</th>
              <th>Grade</th>
              <th>Favorite</th>
              <th>Rewatch</th>
              <th>Review</th>
            </>
          )}
        </tr>
      </StyledThead>
      <tbody>
        {months.map((month, id) => (
          <DiaryMonth month={month.month} days={month.days} key={`month-${id}`} />
        ))}
      </tbody>
    </table>
  );
};

export default DiaryYear;
