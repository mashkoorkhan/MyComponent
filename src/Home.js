import {StyleSheet, Text, View,SafeAreaView} from 'react-native';
import React from 'react';
import ButtonComp from './Component/ButtonComponent/ButtonComp';
const Home = () => {
  return (
   
    <View style={{flex: 1, backgroundColor: 'grey'}}>
         <SafeAreaView style={{marginTop:20}}>
      <ButtonComp btnText="send" onPress={() => alert(' i am Send Button')} />
      <ButtonComp
        btnText="cancel"
        buttonStyle={{backgroundColor: 'blue'}}
        onPress={() => alert(' i am Cancel Button')}
      />
      <ButtonComp
        btnText="Add"
        buttonStyle={{backgroundColor: 'green'}}
        textStyle={{fontSize: 24}}
        onPress={() => alert(' i am Add Button')}
      />
       </SafeAreaView>
    </View>
   
  );
};

export default Home;

const styles = StyleSheet.create({});
