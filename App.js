import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

// screens
import AllExpensesScreen from "./src/screens/AllExpensesScreen";
import RecentExpensesScreen from "./src/screens/RecentExpensesScreen";
import ExpenseScreen from "./src/screens/ExpenseScreen";

// navigator obj
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// styles
import { GlobalStyles } from "./src/constants/styles";
import { ScreenOptions } from "./src/constants/screenOptions";
import { pressed } from "./src/constants/pressed";
import IconButton from "./src/components/UI/IconButton";

// context
import { ExpenseContextProvider } from "./src/store/expense-context";

const ViewExpensesTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ navigation }) => {
                return {
                    ...ScreenOptions,
                    tabBarStyle: {
                        backgroundColor: GlobalStyles.colors.primary,
                        borderTopWidth: 0,
                        height: "10%",
                        paddingBottom: 0,
                    },
                    tabBarActiveTintColor: "white",
                    tabBarInactiveTintColor: "rgb(31, 85, 141)",
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontWeight: "bold",
                        paddingBottom: "10%",
                    },
                    tabBarActiveBackgroundColor: "rgb(69, 162, 255)",
                    headerRight: () => {
                        return (
                            <IconButton
                                name="playlist-add"
                                onPress={() => {
                                    navigation.navigate("ExpenseScreen", {
                                        mode: "add",
                                    });
                                }}
                                style={pressed}
                            />
                        );
                    },
                };
            }}
        >
            <Tab.Screen
                name="AllExpensesScreen"
                component={AllExpensesScreen}
                options={{
                    title: "All Expenses",
                    tabBarLabel: "All",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name="attach-money"
                            size={32}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="RecentExpensesScreen"
                component={RecentExpensesScreen}
                options={{
                    title: "Recent Expenses",
                    tabBarLabel: "Recent",
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="timer" size={32} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <ExpenseContextProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={"ViewExpensesTab"}
                    screenOptions={{
                        ...ScreenOptions,
                    }}
                >
                    <Stack.Screen
                        name="ViewExpensesTab"
                        component={ViewExpensesTab}
                        options={{ headerShown: false, title: "Home" }}
                    />
                    <Stack.Screen
                        name="ExpenseScreen"
                        component={ExpenseScreen}
                        options={({ navigation }) => {
                            return {
                                title: "Expense",
                                presentation: "modal",
                                headerBackTitleVisible: false,
                                headerBackImage: () => (
                                    <IconButton
                                        name="close"
                                        onPress={navigation.goBack}
                                        style={pressed}
                                    />
                                ),
                            };
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ExpenseContextProvider>
    );
}
