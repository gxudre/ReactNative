import {View} from 'react-native'
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'


const Home = () => {
  return<View style={{ flex:1, backgroundColor: '1E1E1E'}}>
    <Appbar.Header>
      <Appbar.Content title='Catálogo' />
      <Appbar.Action icon="exit-outline" onPress={() => {}} />
    </Appbar.Header>
  </View>
}

export default Home;