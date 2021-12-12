import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../Colors/Colors';

const CardComponent = props => {
  return (
    <SafeAreaView>
      <View style={{...styles.card, ...props.styled}}>{props.children}</View>
    </SafeAreaView>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.gray300,
    backgroundColor: Colors.gray300,
    marginVertical: 4,
    width: '100%',
  },
});
