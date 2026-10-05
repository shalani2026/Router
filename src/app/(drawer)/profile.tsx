import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.card}>
        <View style ={styles.title}>SP</View>

        <Text style={styles.name}>Saloni Patel</Text>

        <Text style={styles.email}>miss_saloni99@gmail.com</Text>

        <Text style={styles.info}>React Native Developer</Text>

       
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#032a5e",
  },

  card: {
  width: "70%",
  minHeight: 400,
  padding: 25,
  borderRadius: 20,
  backgroundColor: "#102f63",
  alignItems: "center",
},

  title: {
    width : 100,
    height : 100,
    color: "white",
    marginBottom: 30,
    borderRadius : '50%',
    backgroundColor : 'red',
    justifyContent :'center',
    alignItems : 'center',
    fontSize : 60
  },

  name: {
    fontSize: 22,
    fontWeight: "600",
    color: "white",
  },

  email: {
    fontSize: 15,
    color: "white",
    marginTop: 10,
  },

  info: {
    fontSize: 16,
    color: "white",
    marginTop: 35,
  },
});