import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}> Home Screen Page</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'GoogleSans-Regular',
  },
});
