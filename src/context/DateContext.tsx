'use client';

import dayjs, { Dayjs } from 'dayjs';
import React, { createContext, useState } from 'react';

type StateType = Dayjs;

export const DateContext = createContext<{
  date: StateType;
  handleDate: (month?: number) => void;
}>({ date: dayjs(), handleDate: (month?: number) => {} });

export const DateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [date, setDate] = useState(dayjs());

  /**
   * @description 날짜를 변경하는 함수
   * @param {number} month - 숫자 만큼 달을 +, -
   */
  const handleDate = (month?: number) => {
    switch (true) {
      case typeof month === 'number':
        const newDate = date.add(Number(month), 'M');
        return setDate(newDate);
      case typeof month !== 'number':
        const today = dayjs();
        return setDate(today);
      default:
        return setDate(dayjs());
    }
  };

  return <DateContext.Provider value={{ date, handleDate }}>{children}</DateContext.Provider>;
};
