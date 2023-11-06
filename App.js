import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigator/Navigator';
import FistScreen from './src/Screen/FirstScreen';
import Order from './src/screen/Order';
export default function App() {

    return ( 
        <Order></Order>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});