'use client';

// utile & type
import styled, { css } from 'styled-components';

export type DateType = {
  day: string;
  date: number;
};

export type CalendarCellProps = {
  date: DateType;
  isDay?: boolean;
  amount?: number;
  isHoliDay: boolean;
  pay: number;
  memo?: string;
};

const CalendarCell = ({ date, amount, isHoliDay, pay, memo, isDay }: CalendarCellProps) => (
  <CellWrap isHoliDay={isHoliDay}>
    {isDay && <Week>{date.day}</Week>}
    <Date>{date.date}</Date>
    <CalendarContent></CalendarContent>
  </CellWrap>
);

const CommonCellStyle = styled.div`
  color: ${({ theme }) => theme.gray.gray70};
  ${({ theme }) => theme.textSize.S16W400};
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
  ${({ theme }) => theme.textSize.S36W700};
  color: ${({ theme }) => theme.gray.gray50};
`;

const Memo = styled.span`
  ${({ theme }) => theme.textSize.S24W400};
  margin-top: 14px;
  color: ${({ theme }) => theme.gray.gray50};
`;

const CellWrap = styled.div<{ isHoliDay?: boolean }>`
  border: 1px solid ${({ theme }) => theme.gray.gray30};
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 14px;

  ${({ isHoliDay }) =>
    isHoliDay &&
    css`
      background-color: ${({ theme }) => theme.gray.gray10};
    `}
`;

export default CalendarCell;
