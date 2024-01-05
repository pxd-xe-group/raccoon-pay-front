'use client';

import { Calendar } from '@/src/components/calendar';
import styled from 'styled-components';

// TODO: 컴파운드 컴포넌트 패턴 적용필요
const Home = () => {
  return (
    <Main>
      <Calendar />
    </Main>
  );
};

export default Home;

const Main = styled.main`
  display: flex;
`;
