declare module 'CalendarType' {
  export interface DateType {
    day: string;
    date: number;
    index: number;
  }

  export interface CalendarCellProps {
    date: DateType;
    amount?: number;
    isHolyDay: boolean;
    pay: number;
    memo?: string;
  }
}
