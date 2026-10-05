import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            drawerLabel: "Home",
          }}
        />

        <Drawer.Screen
          name="profile"
          options={{
            title: "Profile",
            drawerLabel: "Profile",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Layout;