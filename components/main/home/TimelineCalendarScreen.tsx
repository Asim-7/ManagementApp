import groupBy from "lodash/groupBy";
import filter from "lodash/filter";
import find from "lodash/find";

import React, { Component } from "react";
import { Alert } from "react-native";
import {
  ExpandableCalendar,
  TimelineEventProps,
  TimelineList,
  CalendarProvider,
  TimelineProps,
  CalendarUtils,
} from "react-native-calendars";

import { timelineEvents, getDate } from "../../../testData/timelineEvents";
import EditEventModal from "./EditEventModal";

const INITIAL_TIME = { hour: 9, minutes: 0 };
const EVENTS: TimelineEventProps[] = timelineEvents;
export default class TimelineCalendarScreen extends Component {
  state = {
    currentDate: getDate(),
    events: EVENTS,
    eventsByDate: groupBy(EVENTS, (e) =>
      CalendarUtils.getCalendarDateString(e.start)
    ) as {
      [key: string]: TimelineEventProps[];
    },
    modalVisible: false,
    selectedEvent: null,
    isNewEvent: false,
    newEventStartTime: null,
  };

  marked = {
    [`${getDate(-1)}`]: { marked: true },
    [`${getDate()}`]: { marked: true },
    [`${getDate(1)}`]: { marked: true },
    [`${getDate(2)}`]: { marked: true },
    [`${getDate(4)}`]: { marked: true },
  };

  onDateChanged = (date: string, source: string) => {
    console.log("TimelineCalendarScreen onDateChanged: ", date, source);
    this.setState({ currentDate: date });
  };

  onMonthChange = (month: any, updateSource: any) => {
    console.log("TimelineCalendarScreen onMonthChange: ", month, updateSource);
  };

  createNewEvent: TimelineProps["onBackgroundLongPress"] = (
    timeString,
    timeObject
  ) => {
    const { eventsByDate } = this.state;
    const hourString = `${(timeObject.hour + 1).toString().padStart(2, "0")}`;
    const minutesString = `${timeObject.minutes.toString().padStart(2, "0")}`;

    const newEvent = {
      id: "draft",
      start: `${timeString}`,
      end: `${timeObject.date} ${hourString}:${minutesString}:00`,
      title: "New Event",
      color: "white",
    };

    if (timeObject.date) {
      if (eventsByDate[timeObject.date]) {
        eventsByDate[timeObject.date] = [
          ...eventsByDate[timeObject.date],
          newEvent,
        ];
        this.setState({ eventsByDate });
      } else {
        eventsByDate[timeObject.date] = [newEvent];
        this.setState({ eventsByDate: { ...eventsByDate } });
      }
    }
  };

  approveNewEvent = (timeString, timeObject) => {
    const { eventsByDate } = this.state;
    const hourString = `${(timeObject.hour + 1).toString().padStart(2, "0")}`;
    const minutesString = `${timeObject.minutes.toString().padStart(2, "0")}`;

    this.setState({
      modalVisible: true,
      selectedEvent: {
        id: `event-${Date.now()}`,
        start: `${timeString}`,
        end: `${timeObject.date} ${hourString}:${minutesString}:00`,
        title: "New event",
        color: "white",
        summary: "Summary of new event",
      },
      isNewEvent: true,
      newEventStartTime: timeObject.date,
    });

    // removing draft once the modal is visible at the top of draft
    if (timeObject.date) {
      eventsByDate[timeObject.date] = filter(
        eventsByDate[timeObject.date],
        (e) => e.id !== "draft"
      );

      this.setState({
        eventsByDate,
      });
    }
  };

  handleSaveEvent = (updatedEvent) => {
    const { eventsByDate, isNewEvent, newEventStartTime } = this.state;
    const dateKey = CalendarUtils.getCalendarDateString(updatedEvent.start);

    let updatedEvents;
    if (isNewEvent) {
      updatedEvents = eventsByDate[dateKey]
        ? [...eventsByDate[dateKey], updatedEvent]
        : [updatedEvent];
    } else {
      updatedEvents = eventsByDate[dateKey].map((e) => {
        if (e.id === updatedEvent.id) {
          return updatedEvent;
        }
        return e;
      });
    }

    this.setState({
      eventsByDate: { ...eventsByDate, [dateKey]: updatedEvents },
      modalVisible: false,
      selectedEvent: null,
      isNewEvent: false,
      newEventStartTime: null,
    });
  };

  handleCloseModal = () => {
    this.setState({ modalVisible: false });
  };

  editEvent = (event) => {
    this.setState({
      modalVisible: true,
      selectedEvent: event,
      isNewEvent: false,
    });
  };

  onEventPress = (event) => {
    this.editEvent(event);
  };

  private timelineProps: Partial<TimelineProps> = {
    format24h: true,
    onBackgroundLongPress: this.createNewEvent,
    onBackgroundLongPressOut: this.approveNewEvent,
    onEventPress: this.onEventPress,
    // scrollToFirst: true,
    // start: 0,
    // end: 24,
    unavailableHours: [
      { start: 0, end: 6 },
      { start: 22, end: 24 },
    ],
    unavailableHoursColor: "linen",
    overlapEventsSpacing: 8,
    rightEdgeSpacing: 24,
  };

  render() {
    const {
      currentDate,
      eventsByDate,
      modalVisible,
      selectedEvent,
      isNewEvent,
    } = this.state;

    return (
      <CalendarProvider
        date={currentDate}
        onDateChanged={this.onDateChanged}
        onMonthChange={this.onMonthChange}
        showTodayButton
        disabledOpacity={0.6}
        // numberOfDays={3}
      >
        <ExpandableCalendar
          firstDay={1}
          //   leftArrowImageSource={require('../img/previous.png')}
          //   rightArrowImageSource={require('../img/next.png')}
          markedDates={this.marked}
        />
        <TimelineList
          events={eventsByDate}
          timelineProps={this.timelineProps}
          showNowIndicator
          scrollToNow
          //scrollToFirst
          initialTime={INITIAL_TIME}
        />
        {selectedEvent && (
          <EditEventModal
            isVisible={modalVisible}
            event={selectedEvent}
            onClose={this.handleCloseModal}
            onSave={this.handleSaveEvent}
            isNew={isNewEvent}
          />
        )}
      </CalendarProvider>
    );
  }
}
