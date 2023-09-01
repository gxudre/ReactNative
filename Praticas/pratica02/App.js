import Box from './components/Box';
import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={[styles.container, styles.flexRow]}>
      <Box color={'red'} size={100}></Box>
      <Box color={'green'} size={100}></Box>
      <Box color={'blue'} size={100}></Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  flexColumn: { flexDirection: 'column' },
  flexRow: { flexDirection: 'row' },
  flexColumnReverse: { flexDirection: 'column-reverse' },
  flexRowReverse: { flexDirection: 'row' },
  justifyStart: { justifyContent: 'flex-start' },
  justifyCenter: { justifyContent: 'center' },
  justifyEnd: { justifyContent: 'end' },
  justifySpaceBetween: { justifyContent: 'space-between' },
  justifySpaceAround: { justifyContent: 'space-around' },
  justifySpaceEvenly: { justifyContent: 'space-evenly' },
  alignStart: { alignItens: 'flex-start' },
  alignCenter: { alignItens: 'center' },
  alignEnd: { alignItens: 'flex-end' },
  alignStretch: { alignItens: 'stretch' },
});

export default App;
