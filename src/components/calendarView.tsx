
import { View } from 'react-native';
import {ExpandableCalendar, CalendarProvider} from 'react-native-calendars';



export default function CalendarView({selectedDate, onDateChange}: {selectedDate: string, onDateChange: Function}){

return(
        <CalendarProvider
    date={selectedDate}
    onDateChanged={(date)=>{
      onDateChange(date)
    }}
    >
            <ExpandableCalendar
      markedDates={{
        [selectedDate]: {marked: true}
      }}
    />
    </CalendarProvider>


)
}