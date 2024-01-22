'use client';

import { useContext, useState } from 'react';
import styled from 'styled-components';
import { Calendar } from '@/src/components/calendar';
import { NavContext } from '@/src/context/NavContext';
import { SideNav } from '@/src/components/sidenav';
// TODO: 컴파운드 컴포넌트 패턴 적용필요
const Home = () => {
  const { isNavOpened } = useContext(NavContext);

  return (
    <Main>
      {isNavOpened && <SideNav />}
      <Calendar />
    </Main>
  );
};

export default Home;

const Main = styled.main`
  display: flex;
`;
