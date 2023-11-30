'use client';

// utile & type
import styled from 'styled-components';
import GenCalendarData from '@/src/utils/genCalendarData';

// component
import { CalendarCell } from '@/src/components/calendar/CalendarCell';

// TODO: 컴파운드 컴포넌트 패턴 적용필요
export default function Home() {
  const CalendarData = GenCalendarData();

  return (
    <main>
      <CalendarWrap>
        {CalendarData.map((data, index) => {
          return <CalendarCell key={index} date={data} pay={10000} memo={'긴자료코'} />;
        })}
      </CalendarWrap>
    </main>
  );
}

const CalendarWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: 100vh;
`;
