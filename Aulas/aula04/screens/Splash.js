import { View, Image, Text } from 'react-native';
import {ActivityIndicator} from 'react-native-paper'

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
      }}>
       <Image source={require('../assets/popcorn.png')}/>
        <ActivityIndicator size={'large'} color={"#E82F3E"}/>
      </View>
  );
};

export default Splash;
