import {View} from 'react-native'
import { Appbar } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons'


const Home = (props) => {
  return<View style={{ flex:1, backgroundColor: '1E1E1E'}}>
    <Appbar.Header>
      <Appbar.Content title='Catálogo' />
      <Appbar.Action icon={() => <Ionicons name="exit-outline" size={24} color={"white"} />}
        onPress={props.onLogout}
       />
    </Appbar.Header>
  </View>
}

export default Home;