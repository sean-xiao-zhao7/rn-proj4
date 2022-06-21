import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import AllExpensesScreen from "./src/screens/AllExpensesScreen";
import RecentExpensesScreen from "./src/screens/RecentExpensesScreen";
import ManageExpensesScreen from "./src/screens/manage/ManageExpensesScreen";

// navigator obj
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ViewExpensesTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="RecentExpensesScreen"
                component={RecentExpensesScreen}
            />
            <Tab.Screen
                name="AllExpensesScreen"
                component={AllExpensesScreen}
            />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <SafeAreaView>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"ViewExpensesTab"}>
                    <Stack.Screen
                        name="ViewExpensesTab"
                        component={ViewExpensesTab}
                    />
                    <Stack.Screen
                        name="ManageExpensesScreen"
                        component={ManageExpensesScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}
