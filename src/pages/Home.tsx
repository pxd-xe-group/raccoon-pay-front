'use client';

// utile & type
import styled from 'styled-components';
import genCalendarData from '@/src/utils/genCalendarData';
import { WEEKENDS } from '@/src/utils/constants';

// component
import { CalendarCell } from '@/src/components/calendar/CalendarCell';

export default function Home() {
  const CalendarData = genCalendarData();

  console.log(CalendarData);

  return (
    <main>
      <CalendarWrap>
        {CalendarData.map((data, index) => {
          const isHoliDay = WEEKENDS.includes(data.day);
          return (
            <CalendarCell
              key={index}
              date={{ ...data }}
              isHoliDay={isHoliDay}
              isDay={data.isDay}
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
`;
