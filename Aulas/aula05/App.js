
import 'react-native-gesture-handler';
import NavegacaoPilha from './routes/navegacaoPilha';
import NavegacaoGaveta from './routes/navegacaoGaveta';
import NavegacaoAba from './routes/navegacaoAba'
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer>
      <NavegacaoPilha />
    </NavigationContainer>
  );
};

export default App;