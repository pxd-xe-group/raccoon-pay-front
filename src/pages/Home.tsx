'use client';
import { useContext } from 'react';
import styled from 'styled-components';

// component
import { CalendarCell } from '@/src/components/calendar/CalendarCell';

// utile & type
import genCalendarData from '@/src/utils/genCalendarData';
import { DateContext } from '../context/DateContext';
import { WEEKENDS } from '../constants/calendar';
import dayjs from 'dayjs';

// TODO: 컴파운드 컴포넌트 패턴 적용필요
export default function Home() {
  const { date: currentDate } = useContext(DateContext);
  const CalendarData = genCalendarData(currentDate);

  return (
    <main>
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
    </main>
  );
}

const CalendarWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: calc(100vh - 64px);
`;
