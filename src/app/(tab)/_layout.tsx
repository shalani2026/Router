
import { Tabs } from 'expo-router';


const Tablayout = () => {
  return (
  <Tabs>
    <Tabs.Screen name= "index" options={{headerShown :false}} />
    <Tabs.Screen name= "About" options={{headerShown :false}}  />
    <Tabs.Screen name= "profile"options={{headerShown :false}}  />
  </Tabs>
)
}

export default Tablayout