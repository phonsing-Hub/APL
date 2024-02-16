// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Calculator from './Components/Calc';

const App = () => {
  return (
    <View style={styles.app}>
      <Calculator/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app:{
    marginTop: 80,
    backgroundColor: '#fefefe'
  }
})
// styles...



