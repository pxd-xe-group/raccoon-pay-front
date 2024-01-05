'use client';

import { useContext } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

// component
import { CalendarCell } from '@/src/components/calendar/';

// utile & type
import genCalendarData from '@/src/utils/genCalendarData';
import { DateContext } from '@/src/context/DateContext';
import { WEEKENDS } from '@/src/constants/calendar';

const Calendar = () => {
  const { date: currentDate } = useContext(DateContext);
  const CalendarData = genCalendarData(currentDate);

  return (
    <CalendarWrap>
      {CalendarData.map((data, index) => {
        const isHoliday = WEEKENDS.includes(data.day);
        const isToday = dayjs(dayjs().format('YYYY-MM-DD')).isSame(data.date);
        return (
          <CalendarCell
            isHoliday={isHoliday}
            isToday={isToday}
            key={index}
            date={data}
            pay={10000}
            memo={'긴자료코'}
          />
        );
      })}
    </CalendarWrap>
  );
};

export default Calendar;

const CalendarWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: calc(100vh - 64px);
`;
