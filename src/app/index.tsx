import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

const Index = () => {
  return (
    <View style={style.main}>

      <View style={style.text}>
        <Link href="/(tab)" style={style.link}>
          Tab Router
        </Link>
      </View>

      <View style={style.text}>
        <Link href="/(drawer)" style={style.link}>
          Drawer Router
        </Link>
      </View>

    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },

  text: {
    height: 40,
    width: 150,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 20,
  },

  link: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default Index;