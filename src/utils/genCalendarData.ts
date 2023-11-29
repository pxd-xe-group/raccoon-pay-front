import dayjs from 'dayjs';
import { DateType } from '@/src/components/calendar/CalendarCell/index';
import { ALL_DAYS, CALENDAR_CELL_LENGTH } from '@/src/constants/calendar';

/**
 * @description 달력 데이터 생성
 * @param {number} month - 달
 */

const genCalendarData = (): DateType[] => {
  const month = dayjs().month();
  const year = dayjs().year();

  const firstDayOfMonth = dayjs(new Date(year, month, 1));
  const startWeek = firstDayOfMonth.day();

  const CalendarData = Array.from({ length: CALENDAR_CELL_LENGTH }, (_, index) => {
    const currentDay = index + 1 - startWeek;
    const currentDayObj = dayjs(firstDayOfMonth).date(currentDay);
    const isFirstWeek = index < 7; // 첫 번쨰 주에는 위에 월~일을 표시

    const dayData = {
      day: ALL_DAYS[currentDayObj.day()],
      date: currentDayObj,
      isFirstWeek
    };

    return dayData;
  });

  return CalendarData;
};

export default genCalendarData;
