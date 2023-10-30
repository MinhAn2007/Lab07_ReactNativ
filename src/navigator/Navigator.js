import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../Screen/FirstScreen";
const stack = createNativeStackNavigator()

export default function Navigator() {
    return(
        <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name = "FistScreen" component={FirstScreen}></stack.Screen>
        </stack.Navigator>
    </NavigationContainer>
    );
}
