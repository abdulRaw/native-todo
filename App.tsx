import {PaperProvider} from "react-native-paper"
import Auth from "./Components/Login"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from "./Components/Todo";
const Stack = createNativeStackNavigator();
export default function App() {
  return <PaperProvider>
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="LOGIN" component={Auth} />
      <Stack.Screen name="TODO" component={Todo} />
      </Stack.Navigator>
      </NavigationContainer>
      
  </PaperProvider>
  
}