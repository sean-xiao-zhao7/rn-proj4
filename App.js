import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import AllExpensesScreen from "./src/screens/AllExpensesScreen";

// navigator obj
const Stack = createStackNavigator();

export default function App() {
    return (
        <SafeAreaView>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"AllExpensesScreen"}>
                    <Stack.Screen
                        name="AllExpensesScreen"
                        component={AllExpensesScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
