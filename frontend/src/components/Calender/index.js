import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';

import CalendarBody from './CalenderBody';
import CalendarHead from './CalenderHead';

function Calendar(props) {
  var date = new Date();
  const allMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentDayInNum = date.getDate();

  const [currentMonthInName, setcurrentMonthInName] = useState(
    allMonths[date.getMonth()]
  );
  const [showMonthTable, setShowMonthTable] = useState(false);
  const currentYear = date.getFullYear();
  const [ClickselectedDay, setSelected] = useState({
    day: currentDayInNum,
    month: actualMonthInName(),
  });
  //console.log(selectedDay);

  const setClickSelectedDay = (day) => {
    setSelected({
      day,
      month: actualMonthInName(),
    });
  };

  function clickSetMonth(month) {
    console.log(month);
    setcurrentMonthInName(month);

    toggleMonthSelect();
  }

  function actualMonthInName() {
    return allMonths[date.getMonth()];
  }

  function toggleMonthSelect() {
    if (showMonthTable === false) setShowMonthTable(true);
    else setShowMonthTable(false);
  }

  function firstDayOfMonthInNum() {
    let numOfMonth;
    for (let i = 0; i <= 11; i++) {
      if (allMonths[i] === currentMonthInName) numOfMonth = i;
    }
    var firstDay = new Date(date.getFullYear(), numOfMonth, 1);
    //console.log(firstDay);
    const day = moment(firstDay);
    //console.log(day.day());
    return day.day();
  }

  //   function getDaysInMonth(year, month) {
  //     return new Date(year, month, 0).getDate();
  //   }

  function daysInMonthInNum() {
    let numOfMonth;
    for (let i = 0; i <= 11; i++) {
      if (allMonths[i] === currentMonthInName) numOfMonth = i + 1;
    }
    return new Date(currentYear, numOfMonth, 0).getDate();
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <CalendarHead
          allMonths={allMonths}
          currentMonthInName={currentMonthInName}
          currentYear={currentYear}
          clickSetMonth={clickSetMonth}
          showMonthTable={showMonthTable}
          toggleMonthSelect={toggleMonthSelect}
        />
        <CalendarBody
          firstDayOfMonthInNum={firstDayOfMonthInNum}
          daysInMonthInNum={daysInMonthInNum}
          currentDayInNum={currentDayInNum}
          currentMonthInName={currentMonthInName}
          //   currentMonthInNameNum={currentMonthInNameNum}
          actualMonthInName={actualMonthInName}
          setClickSelectedDay={setClickSelectedDay}
          ClickselectedDay={ClickselectedDay}
          weekdays={moment.weekdays()}
          //activeDays={activeDays}
        />
      </Grid>
    </Grid>
  );
}

export default Calendar;
