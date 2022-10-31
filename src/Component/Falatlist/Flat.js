import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';

const Flat = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        setData(res.products);
        console.log('Api Response', res);
      })
      .catch(error => {
        console.log('Api Response Error', error);
      });
  };
  const renderItem = useCallback(
    ({item}) => {
      return (
        <View style={styles.flatStyle}>
          <Image
            source={{uri: item.thumbnail}}
            style={{width: '100%', height: 200, borderRadius: 8}}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 8,
            }}>
            <Text>{item.brand}</Text>
            <Text> $:{item.price}</Text>
          </View>
          <Text>{item.description}</Text>
        </View>
      );
    },
    [data],
  );
  const ItemSeparatorComponent = useCallback(() => {
    return <View style={{height: 20}} />;
  });

  const keyExtractor = useCallback(item => `${item.id}`);
  const onEndReached = () => {
    alert('on End');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{marginHorizontal: 16, marginTop: 10}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={ItemSeparatorComponent}
          onEndReached={onEndReached}
        />
      </View>
    </SafeAreaView>
  );
};

export default Flat;

const styles = StyleSheet.create({
  flatStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.5,

    elevation: 2,
    backgroundColor: 'white',
    padding: 8,
    margin: 2,
    borderRadius: 8,
  },
});
