import { useContext, useLayoutEffect } from "react";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import MyText from "../components/UI/MyText";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import { ExpenseContext } from "../store/expense-context";

const ExpenseScreen = ({ route, navigation }) => {
    const expense = route.params?.expense;
    const mode = route.params?.mode;
    const expenseContext = useContext(ExpenseContext);

    const deleteHandler = () => {
        expenseContext.deleteExpense(expense.id);
        navigation.goBack();
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: mode === "add" ? "New Expense" : "Edit Expense",
            headerRight: () => {
                if (mode !== "add") {
                    return (
                        <IconButton
                            name="delete"
                            onPress={deleteHandler}
                            color="red"
                        />
                    );
                }
            },
        });
    }, [navigation]);

    if (!expense) {
        return null;
    }

    return (
        <View
            style={[
                GlobalStyles.spacing1,
                GlobalStyles.container1,
                { flex: 1 },
            ]}
        >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons
                    name="assignment"
                    size={32}
                    color={GlobalStyles.colors.primary}
                />
                <MyText>{expense.title}</MyText>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons
                    name="date-range"
                    size={32}
                    color={GlobalStyles.colors.primary}
                />
                <MyText>{expense.duration}</MyText>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons
                    name="attach-money"
                    size={32}
                    color={GlobalStyles.colors.primary}
                />
                <MyText>{expense.amount}</MyText>
            </View>
        </View>
    );
};

export default ExpenseScreen;
