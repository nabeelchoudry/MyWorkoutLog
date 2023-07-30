import {Text, View} from 'react-native';
import CalendarView from '../../components/calendarView';
import DayHeading from './subViews/dayHeading';
import moment from 'moment';
import {useState} from 'react';

const main = (): JSX.Element => {
  const [selected, setSelected] = useState(moment().toISOString());

  return (
    <View style={{ flex:1, position:'absolute'}}>
      <View style={{ backgroundColor:'yellow'}}>
        <CalendarView
          selectedDate={selected}
          onDateChange={(date: String) => setSelected(date)}
        />
      </View>
      <View >
        <DayHeading heading={selected} />
      </View>
    </View>
  );
};

export default main;
