import { PaperProvider } from 'react-native-paper';
import Auth from './Components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from './Components/Main';
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <PaperProvider>
            <Todo />
        </PaperProvider>
    );
}
