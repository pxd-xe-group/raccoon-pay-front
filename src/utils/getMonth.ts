import dayjs from 'dayjs';

// todo: 공휴일 및 pxd행사일을 어떻게 처리 할것인가..

export default function getMonth() {
  const month = dayjs().month();
  const year = dayjs().year();

  let startWeek = dayjs(new Date(year, month)).startOf('month').day();
  let endDay = dayjs(new Date(year, month)).endOf('month').date();

  let days = [];
  let weekdays = ['일', '월', '화', '수', '목', '금', '토'];

  let prevMonthLastDay = dayjs(new Date(year, month)).startOf('month').subtract(1, 'day').date();
  for (let i = startWeek - 1; i >= 0; i--) {
    days.push({ day: weekdays[(7 + startWeek - 1 - i) % 7], date: prevMonthLastDay - i });
  }

  for (let i = 1; i <= endDay; i++) {
    days.push({ day: weekdays[(startWeek + i - 1) % 7], date: i });
  }

  let nextMonthDay = 1;
  while (days.length < 35) {
    days.push({ day: weekdays[(startWeek + endDay + nextMonthDay - 1) % 7], date: nextMonthDay++ });
  }
  return days;
}
