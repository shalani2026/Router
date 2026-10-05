import { StyleSheet, Text, View } from 'react-native'


const About = () => {
  return (
    <View style ={style.card}>
      <View style ={style.lobo}>
      <Text style = {style.text}>  This is About Tab</Text>
    </View>
    </View>
  )

}

  const style = StyleSheet.create ({
    card : {
      flex : 1 ,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor : 'blue'
    },
    text:{
       fontSize : 50,
       fontFamily : 'sans-serif',
       color : 'white',
       fontWeight : 500,
       

    },
    lobo : {
      width : 300 ,
      height: 300,
      backgroundColor : 'green',
      justifyContent : 'center',
      alignItems : 'center',
      borderRadius : '50%',
      borderWidth : 4,
      paddingLeft : 40
      
    
    }

  })

export default About