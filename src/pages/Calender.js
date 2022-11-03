import React from 'react';
import {
  ScheduleComponent, ViewDirective,
  ViewsDirective, Day, Week, 
  WorkWeek, Month, Agenda, Inject,
  Resize, DragAndDrop
} 
from '@syncfusion/ej2-react-schedule'
 
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import { scheduleData } from '../data/dummy';
import Header from '../components/Header';


function Calender() {
  return (
    <div className='m-2 md:m-10 bg-white p-2 mt-24 md:p-10 rounded-3xl'>
      <Header category="App" title="Calender" />

      <ScheduleComponent
        height="650px"
        eventSettings={{dataSource: scheduleData}}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calender
