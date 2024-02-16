import React from 'react';
import {TouchableOpacity ,View,StyleSheet} from 'react-native';
import { Text } from '@rneui/base';

const Result = ({ result }) => {
  return (
<View style={{flexDirection: 'row',justifyContent:'space-between',alignItems:'center'}}>
    <Text h4> ผลลัพธ์ </Text>
    <TouchableOpacity style={styles.btn}>
       <Text >{result}</Text>
    </TouchableOpacity>
</View>
  )};

  const styles = StyleSheet.create({
    btn:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#bebebe',
        height: 50,
        borderWidth:1,
        width:280,
        fontSize: 16
    }
  })

export default Result;
