import {TextInput, Text, View, StyleSheet} from 'react-native';
import moment from 'moment';
import { useState } from 'react';

const dayHeading = ({}): JSX.Element => {
    const [heading, setHeading] = useState('');
    const [edit, setEdit]= useState(false);
  return (
    <View style={{}}>
        {!edit && heading?<Text>{heading}</Text>:
      <TextInput
        onChangeText={(val)=>setHeading(val)}
        value={heading}
        placeholder="Training Day"
        onSubmitEditing={()=> setEdit(false)}
        style={styles.input}
      />}
    </View>
  );
};
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default dayHeading;
