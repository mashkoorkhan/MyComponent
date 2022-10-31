import React, {useCallback, useState} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

const CallBack = () => {
  const [number, setNumber] = useState(0);

  const ondecrement = useCallback(() => {
    setNumber(number - 1);
    if (number === 0) {
      number = 0;
    }
  }, [number]);

  const onIncrement = useCallback(() => {
    setNumber(number + 1);
  }, [number]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={ondecrement}>
        <Text style={{fontSize: 56}}>-</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>{number}</Text>
      <TouchableOpacity onPress={onIncrement}>
        <Text style={{fontSize: 56}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CallBack;
