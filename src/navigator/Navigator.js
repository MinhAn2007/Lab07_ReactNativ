import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../Screen/FirstScreen";
import SecondScreen from "../Screen/SecondScreen";
import ThirdScreen from "../Screen/ThirdScreen";
import { HeaderBackButton } from "@react-navigation/elements";
import { TouchableOpacity } from "react-native-web";
import { AntDesign } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }}/>
        <Stack.Screen
          name="SecondScreen"
          component={SecondScreen}
          options={({ navigation }) => ({
            headerTitle: 'Shop Near Me',
            headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
            },

            headerLeft: () => (
              <HeaderBackButton
                onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
                <TouchableOpacity style={{ marginHorizontal: 40 }}>
                  <AntDesign name="search1" size={20} color="green" />
                </TouchableOpacity>
            )
          })
        }
          
        />
                <Stack.Screen
          name="ThirdScreen"
          component={ThirdScreen}
          options={({ navigation }) => ({
            headerTitle: 'Drinks',
            headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
            },

            headerLeft: () => (
              <HeaderBackButton
                onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
                <TouchableOpacity style={{ marginHorizontal: 40 }}>
                  <AntDesign name="search1" size={20} color="green" />
                </TouchableOpacity>
            )
          })
        }
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
