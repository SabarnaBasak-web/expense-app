import HomeScreen from '../HomeScreen';
import renderer from 'react-test-renderer';
import React from 'react';
import 'react-native';
import {fireEvent, render} from '@testing-library/react-native';

// test('renders correctly', () => {
//   const tree = renderer.create(<HomeScreen />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

const Button = ({onClick, children}) => {
  <Button onPress={onClick}>Press</Button>;
};

test('button should render', () => {
  const buttonName = 'Press';
  const {getByTestId} = render(<HomeScreen />);
  const foundButton = getByTestId(buttonName);
  expect(foundButton).toBeTruthy();
});

test('button click should show an alert', () => {
  const handleClick = jest.fn();
  render(<Button onPress={handleClick}>Press</Button>);
  fireEvent.click()
});
