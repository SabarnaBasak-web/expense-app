import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import CardComponent from '../Components/CardComponent';
import {Colors} from '../Colors/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CardComponent styled={styles.cardStyle}>
          <View style={styles.icon}>
            <Icon name="wallet" size={35} color={Colors.secondary} />
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Wallet</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentText}>
              {' '}
              <Icon name="rupee-sign" size={14} /> 1000
            </Text>
            <Text style={styles.contentDate}>
              {' '}
              <Icon name="calendar" size={12} /> 12/12/2021
            </Text>
          </View>
        </CardComponent>
        <CardComponent styled={styles.cardStyle}>
          <View style={styles.icon}>
            <Icon name="money-bill-wave" size={35} color={Colors.red400} />
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Expenses</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentText}>
              {' '}
              <Icon name="rupee-sign" size={14} /> 4000
            </Text>
            <Text style={styles.contentDate}>
              {' '}
              <Icon name="calendar" size={12} /> 12/12/2021
            </Text>
          </View>
        </CardComponent>
        <CardComponent styled={styles.cardStyle}>
          <View style={styles.icon}>
            <Icon name="piggy-bank" size={35} color={Colors.teal} />
          </View>
          <View style={styles.header}>
            <Text style={styles.headerText}>Savings</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentText}>
              {' '}
              <Icon name="rupee-sign" size={14} /> 100
            </Text>
            <Text style={styles.contentDate}>
              {' '}
              <Icon name="calendar" size={12} /> 12/12/2021
            </Text>
          </View>
        </CardComponent>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 5,
  },
  contentText: {
    fontFamily: 'GoogleSans-Regular',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerText: {
    fontFamily: 'GoogleSans-Bold',
    fontSize: 25,
    color: Colors.black,
  },
  cardStyle: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVerticalTop: 5,
    marginBottom: 5,
  },
  content: {
    marginTop: 4,
    padding: 3,
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'center',
  },
  icon: {
    display: 'flex',
    flex: 0.5,
  },
  header: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
  },
  contentDate: {
    fontFamily: 'GoogleSans-Regular',
    fontSize: 12,
    fontWeight: '400',
  },
});
