'use client';

import dayjs, { Dayjs } from 'dayjs';
// utile & type
import styled, { css } from 'styled-components';

export type DateType = {
  day: string;
  date: Dayjs;
  isFirstWeek: boolean;
};

export type CalendarCellProps = {
  date: DateType;
  amount?: number;
  isHoliday: boolean;
  pay: number;
  memo?: string;
  isToday: boolean;
};

const CalendarCell = ({ date, amount, pay, memo, isHoliday, isToday }: CalendarCellProps) => {
  return (
    <CellWrap $isHoliday={isHoliday}>
      {date.isFirstWeek && <Week>{date.day}</Week>}
      <Date $isToday={isToday}>{date.date.format('D')}</Date>
    </CellWrap>
  );
};

const CommonCellStyle = styled.div`
  color: ${({ theme }) => theme.gray.gray70};
  ${({ theme }) => theme.textSize.S16W400};

  @media ${({ theme }) => theme.media.mobile} {
    ${({ theme }) => theme.textSize.S10W400};
  }
`;

const Week = styled(CommonCellStyle)`
  margin-bottom: 12px;
`;

const Date = styled(CommonCellStyle)<{ $isToday?: boolean }>`
  ${({ $isToday }) =>
    $isToday &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      margin-top: -4px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.green.greenBasic};
      color: white;

      @media ${({ theme }) => theme.media.mobile} {
        width: 20px;
        height: 20px;
      }
    `};
`;

const CalendarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 54px;
`;

const Pay = styled.strong`
  color: ${({ theme }) => theme.gray.gray50};
  ${({ theme }) => theme.textSize.S36W700};
`;

const Memo = styled.span`
  margin-top: 14px;
  color: ${({ theme }) => theme.gray.gray50};
  ${({ theme }) => theme.textSize.S24W400};
`;

const CellWrap = styled.div<{ $isHoliday?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 14px;
  border: 1px solid ${({ theme }) => theme.gray.gray30};

  ${({ $isHoliday }) =>
    $isHoliday &&
    css`
      background-color: ${({ theme }) => theme.gray.gray10};
    `};
`;

export default CalendarCell;
