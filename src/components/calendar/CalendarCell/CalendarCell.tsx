'use client';

// utile & type
import React from 'react';
import styled, { css } from 'styled-components';
import { CalendarCellProps } from 'dateType';

const CalendarCell = ({ date, amount, isHolyDay, pay, memo }: CalendarCellProps) => {
  return (
    <CellWrap isHolyDay={isHolyDay}>
      {date.index < 7 && <Week>{date.day}</Week>}

      <Date>{date.date}</Date>

      <CalendarContent>
        {!isHolyDay && <Pay>₩{amount ? amount : pay}</Pay>}
        {!isHolyDay && memo && <Memo>memo</Memo>}
      </CalendarContent>
    </CellWrap>
  );
};

const CommonCellStyle = styled.div`
  color: ${({ theme }) => theme.gray.gray70};
  font-size: 16px;
`;

const Week = styled(CommonCellStyle)``;

const Date = styled(CommonCellStyle)`
  margin-top: 12px;
`;

const CalendarContent = styled.div`
  margin-top: 54px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Pay = styled.strong`
  font-size: 36px;
  font-weight: 700;
  color: ${({ theme }) => theme.gray.gray50};
`;

const Memo = styled.span`
  font-size: 24px;
  margin-top: 14px;
  color: ${({ theme }) => theme.gray.gray50};
`;

const CellWrap = styled.div<{ isHolyDay?: boolean }>`
  border: 1px solid ${({ theme }) => theme.gray.gray30};
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 14px;

  ${({ isHolyDay }) =>
    isHolyDay &&
    css`
      background-color: ${({ theme }) => theme.gray.gray10};
    `}
`;

export { CalendarCell };
