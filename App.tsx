

import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import Main from './src/screens/main';

const App = (): JSX.Element =>{

  return (
    <SafeAreaView style={{flex:1}}>
      <Main/>
    </SafeAreaView>
  )

}



export default App;
