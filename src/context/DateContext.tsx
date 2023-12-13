'use client';

import dayjs, { Dayjs } from 'dayjs';
import React, { createContext, useCallback, useMemo, useState } from 'react';

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

  const handleDate = useCallback(
    (month?: number) => {
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
    },
    [date]
  );

  const value = useMemo(() => {
    return { date, handleDate };
  }, [date, handleDate]);

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

//useMemo
//useCallback
