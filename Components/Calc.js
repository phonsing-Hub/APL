import React, { useState } from 'react';
import { View, TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import { Button } from '@rneui/themed';
import Result from './Result'; // Import the Result component
import { Text } from '@rneui/base';

const Calculator = () => {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [operator, setOperator] = useState(0);
  const [result, setResult] = useState(0);

  const opt = (x) =>{
    setOperator(x);
  }
  const handleOperation = (operator) => {
    const numA = parseFloat(inputA);
    const numB = parseFloat(inputB);

    if (isNaN(numA) || isNaN(numB)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operator) {
      case '+':
        setResult(numA + numB);
        break;
      case '-':
        setResult(numA - numB);
        break;
      case '*':
        setResult(numA * numB);
        break;
      case '/':
        if (numB !== 0) {
          setResult(numA / numB);
        } else {
          setResult('Cannot divide by zero');
        }
        break;
        case 'r':
            setInputA(0);
            setInputB(0);
            setResult(0);
            setOperator('');
        break;
      default:
        setResult('Invalid operator');
    }
  };

  return (
    <View style={styles.clce}>
        <View style={styles.clceinput}>
            <View style={styles.clceinputAB}>
            <Text h4> ตัวตั้ง</Text>
            <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            value={inputA}
            onChangeText={(text) => setInputA(text)}
            />
            </View>

            <View style={styles.clceinputAB}>
            <Text h4> ตัวบวก</Text>
            <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            value={inputB}
            onChangeText={(text) => setInputB(text)}
            />
            </View>
        </View>
      <View style={styles.operator}>
        <Button title="+" onPress={() => opt('+')} style={styles.btn}/>
        <Button title="-" onPress={() => opt('-')} style={styles.btn}/>
        <Button title="*" onPress={() => opt('*')} style={styles.btn}/>
        <Button title="/" onPress={() => opt('/')} style={styles.btn}/>
      </View>
       <TouchableOpacity style={styles.btn1} onPress={() => handleOperation(operator)}>
          <Text style={styles.buttonText}>Calc</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.btn2} onPress={() => handleOperation('r')}>
          <Text style={styles.buttonText}>Clear</Text>
     </TouchableOpacity>
      <Result result={result} />
    </View>
  );
};

const styles = StyleSheet.create({
    clce:{
        padding: 15
    },
    clceinput:{
        marginBottom: 15
    },
    clceinputAB:{
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    input:{
        padding: 5,
        width: 280,
        height: 40,
        borderWidth:1,
        marginBottom: 10,
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#bebebe'
    },
    operator:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15
    },
    btn:{
        width: 50,
        height: 50,
        borderRadius: 15,
    },
    btn1:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#98FF98',
        height: 50,
        borderRadius: 10,
        borderWidth:1,
    },
    btn2:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'red',
        height: 50,
        borderRadius: 10,
        borderWidth:1,
    },
    buttonText:{
        fontSize: 20,
        color: '#ffff'
    }
})

export default Calculator;
