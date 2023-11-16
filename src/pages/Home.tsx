'use client';

// utile & type
import styled from 'styled-components';
import getMonth from '@/src/utils/getMonth';

// component
import { CalendarCell } from '@/src/components/calendar/CalendarCell';

export default function Home() {
  const daysData = getMonth();

  return (
    <main>
      <CalendarWrap>
        {daysData.map((data, index) => {
          // 임시
          const isHolyDay = data.day === '일' || data.day === '토';
          return (
            <CalendarCell
              key={index}
              date={{ ...data, index }}
              isHolyDay={isHolyDay}
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
