import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ButtonComp = ({btnText, buttonStyle, textStyle, onPress}) => {
  return (
    <View>
      <SafeAreaView style={{marginHorizontal: 16}}>
        <TouchableOpacity
          style={{...styles.buttonStyle, ...buttonStyle}}
          activeOpacity={0.9}
          onPress={onPress}>
          <Text style={{...styles.textStyle, ...textStyle}}>{btnText}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: 42,
    borderRadius: 6,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginBottom: 16,
  },
  textStyle: {
    fontSize: 16,
    padding: 8,
    color: 'white',
    fontWeight: 'bold',
  },
});
