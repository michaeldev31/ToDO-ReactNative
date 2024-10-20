
import { StyleSheet,Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
      width:'100%',
      padding: 20,
      //justifyContent: 'center',manera vertical
      //alignItems: 'center', //manera horizontal
      //backgroundColor: 'yellow'
    },
    title: {
      fontSize: 20,
      color: '#6f6f6f'
    },
    text:{
      fontSize: 16,
      color: '#6f6f6f'
    },
    whiteText:{
      fontSize:16,
      color: '#fff'
    },
    textInput:{
      borderColor:  '#6f6f6f',
      borderWidth: 1,
      borderRadius: 15,
      width:Dimensions.get('screen').width * 0.6,
      paddingLeft: 15,
    },
    inputContainer:{
      marginTop:20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    addButton: {
      backgroundColor: '#5897fb',
      justifyContent: 'center',
      alignItems: 'center',
      width:Dimensions.get('screen').width * 0.25,
      borderRadius: 15
    },
    scrollContainer:{
      marginTop:20,
    },
    itemContainer:{
      paddingVertical: 20,
      borderBottomColor: 'e4e4e4',
      borderBottomWidth:1,
      flexDirection:'row',
      justifyContent:'space-between'
  
    },
    textDone:{
      fontSize: 16,
      color: '#6f6f6f',
      textDecorationLine: 'line-through',
    },
    removeButton:{
      backgroundColor: '#F33D3D',
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 10,
      paddingHorizontal: 15
    }
  
  });

  export default styles;
  