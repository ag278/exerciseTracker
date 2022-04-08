import React from 'react';
import './Calender.css';
import nextId from 'react-id-generator';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function CalenderBody(props) {
  const {
    firstDayOfMonthInNum,
    daysInMonthInNum,
    currentDayInNum,
    currentMonthInName,
    // currentMonthNum,
    ClickselectedDay,
    // activeDays,
    setClickSelectedDay,
    actualMonthInName,
    weekdays,
  } = props;
  console.log(ClickselectedDay);
  //console.log(currentMonth);
  let blanks = [];
  for (let i = 0; i < firstDayOfMonthInNum(); i++) {
    blanks.push(<TableCell key={nextId()}>{''}</TableCell>);
  }

  let monthDays = [];

  for (let d = 1; d <= daysInMonthInNum(); d++) {
    let currDay, selectDay, activeDay;

    //Check if day is today
    if (currentDayInNum === d && currentMonthInName === actualMonthInName())
      currDay = 'today';

    // Check if day is selected day
    if (
      ClickselectedDay.day === d &&
      actualMonthInName() === ClickselectedDay.month
    )
      selectDay = 'selected-day';

    // Check if day found in this month active days
    // let formattedDate = `${d}-${currentMonthNum()}`;
    // if (activeDays.indexOf(formattedDate) !== -1) activeDay = 'active';

    // console.log(activeDays);

    monthDays.push(
      <TableCell
        key={d}
        className={`week-day ${currDay} ${selectDay}`}
        onClick={() => setClickSelectedDay(d)}
      >
        <span>{d}</span>
      </TableCell>
    );
  }

  let totalSlots = [...blanks, ...monthDays];
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });

  return (
    <TableContainer component={Paper}>
      <Table className="calendar">
        <TableHead>
          <TableRow>
            {weekdays.map((day, i) => (
              <TableCell key={i}>{day}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((day, i) => (
            <TableRow key={i}>{day}</TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CalenderBody;
