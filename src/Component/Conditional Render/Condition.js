import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Condition = () => {
  const [index, setIndex] = useState(1);
  const khan1 = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 6,
          marginTop: 10,
        }}>
        <Text style={{alignContent: 'center', fontSize: 24, color: 'white'}}>
          Muhammad Mashkoor Khan
        </Text>
      </View>
    );
  };
  const khan2 = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 6,
          marginTop: 10,
        }}>
        <Text style={{alignContent: 'center', fontSize: 24, color: 'white'}}>
          Muhammad Mashkoor Khan
        </Text>
      </View>
    );
  };
  const khan3 = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 6,
          marginTop: 10,
        }}>
        <Text style={{alignContent: 'center', fontSize: 24, color: 'white'}}>
          Muhammad Mashkoor Khan
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, borderRadius: 6}}>
      <View style={{padding: 16, flex: 1, borderRadius: 6}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <TouchableOpacity onPress={() => setIndex(1)}>
            <Text>Khan 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIndex(2)}>
            <Text>Khan2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIndex(3)}>
            <Text>Khan3</Text>
          </TouchableOpacity>
        </View>
        {index == 1 ? khan1() : index == 2 ? khan2() : khan3()}
      </View>
    </SafeAreaView>
  );
};

export default Condition;

const styles = StyleSheet.create({});
