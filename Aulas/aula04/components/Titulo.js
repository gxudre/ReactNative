import{Text} from 'react-native'

const Titulo = (props) =>{
  return <Text style={{fontSize: 24, fontWeight: 'bold', alignSelf: 'center', color:'white'}}>{props.children}</Text>
}

export default Titulo