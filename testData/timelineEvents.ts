import { TimelineEventProps, CalendarUtils } from "react-native-calendars";

const EVENT_COLOR = "#e6add8";
const today = new Date();
export const getDate = (offset = 0) =>
  CalendarUtils.getCalendarDateString(
    new Date().setDate(today.getDate() + offset)
  );

export const timelineEvents: TimelineEventProps[] = [
  {
    id: "0",
    start: `${getDate(-1)} 09:20:00`,
    end: `${getDate(-1)} 12:00:00`,
    title: "Merge Request to React Native Calendars",
    summary: "Merge Timeline Calendar to React Native Calendars",
  },
  {
    id: "1",
    start: `${getDate()} 01:15:00`,
    end: `${getDate()} 02:30:00`,
    title: "Meeting A",
    summary: "Summary for meeting A",
    color: EVENT_COLOR,
  },
  {
    id: "2",
    start: `${getDate()} 01:30:00`,
    end: `${getDate()} 02:30:00`,
    title: "Meeting B",
    summary: "Summary for meeting B",
    color: EVENT_COLOR,
  },
  {
    id: "3",
    start: `${getDate()} 01:45:00`,
    end: `${getDate()} 02:45:00`,
    title: "Meeting C",
    summary: "Summary for meeting C",
    color: EVENT_COLOR,
  },
  {
    id: "4",
    start: `${getDate()} 02:40:00`,
    end: `${getDate()} 03:10:00`,
    title: "Meeting D",
    summary: "Summary for meeting D",
    color: EVENT_COLOR,
  },
  {
    id: "5",
    start: `${getDate()} 02:50:00`,
    end: `${getDate()} 03:20:00`,
    title: "Meeting E",
    summary: "Summary for meeting E",
    color: EVENT_COLOR,
  },
  {
    id: "6",
    start: `${getDate()} 04:30:00`,
    end: `${getDate()} 05:30:00`,
    title: "Meeting F",
    summary: "Summary for meeting F",
    color: EVENT_COLOR,
  },
  {
    id: "7",
    start: `${getDate(1)} 00:30:00`,
    end: `${getDate(1)} 01:30:00`,
    title: "Visit Grand Mother",
    summary: "Visit Grand Mother and bring some fruits.",
    color: "lightblue",
  },
  {
    id: "8",
    start: `${getDate(1)} 02:30:00`,
    end: `${getDate(1)} 03:20:00`,
    title: "Meeting with Prof. Behjet Zuhaira",
    summary: "Meeting with Prof. Behjet at 130 in her office.",
    color: EVENT_COLOR,
  },
  {
    id: "9",
    start: `${getDate(1)} 04:10:00`,
    end: `${getDate(1)} 04:40:00`,
    title: "Tea Time with Dr. Hasan",
    summary: "Tea Time with Dr. Hasan, Talk about Project",
  },
  {
    id: "10",
    start: `${getDate(1)} 01:05:00`,
    end: `${getDate(1)} 01:35:00`,
    title: "Dr. Mariana Joseph",
    summary: "3412 Piedmont Rd NE, GA 3032",
  },
  {
    id: "11",
    start: `${getDate(1)} 14:30:00`,
    end: `${getDate(1)} 16:30:00`,
    title: "Meeting Some Friends in ARMED",
    summary: "Arsalan, Hasnaat, Talha, Waleed, Bilal",
    color: "pink",
  },
  {
    id: "12",
    start: `${getDate(2)} 01:40:00`,
    end: `${getDate(2)} 02:25:00`,
    title: "Meet Sir Khurram Iqbal",
    summary: "Computer Science Dept. Comsats Islamabad",
    color: "orange",
  },
  {
    id: "13",
    start: `${getDate(2)} 04:10:00`,
    end: `${getDate(2)} 04:40:00`,
    title: "Tea Time with Colleagues",
    summary: "WeRplay",
  },
  {
    id: "14",
    start: `${getDate(2)} 00:45:00`,
    end: `${getDate(2)} 01:45:00`,
    title: "Lets Play Apex Legends",
    summary: "with Boys at Work",
  },
  {
    id: "15",
    start: `${getDate(2)} 11:30:00`,
    end: `${getDate(2)} 12:30:00`,
    title: "Dr. Mariana Joseph",
    summary: "3412 Piedmont Rd NE, GA 3032",
  },
  {
    id: "16",
    start: `${getDate(4)} 12:10:00`,
    end: `${getDate(4)} 13:45:00`,
    title: "Merge Request to React Native Calendars",
    summary: "Merge Timeline Calendar to React Native Calendars",
  },
];
