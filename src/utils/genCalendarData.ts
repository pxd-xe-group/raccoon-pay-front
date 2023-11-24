import dayjs from 'dayjs';
import { DateType } from '@/src/components/calendar/CalendarCell/index';
import { ALL_DAYS, CALENDAR_CELL_LENGTH } from '@/src/utils/constants';

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

    let dayData = {
      day: ALL_DAYS[currentDayObj.day()],
      date: currentDayObj.date(),
      isDay: false
    };

    // 0~6번째 인덱스 데이터에 'isDay' 데이터값 추가
    if (index >= 0 && index <= 6) {
      dayData = { ...dayData, isDay: true };
    }

    return dayData;
  });

  return CalendarData;
};

export default genCalendarData;
