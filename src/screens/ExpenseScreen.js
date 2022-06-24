import { useContext, useLayoutEffect, useState } from "react";
import { Button, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import MyText from "../components/UI/MyText";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";
import { ExpenseContext } from "../store/expense-context";
import ExpenseForm from "../components/forms/ExpenseForm";

const ExpenseScreen = ({ route, navigation }) => {
    const expense = route.params?.expense ? route.params.expense : {};
    const expenseContext = useContext(ExpenseContext);
    const [editMode, setEditMode] = useState(
        route.params?.mode === "add" ? true : false
    );

    const addHandler = (expense) => {
        expenseContext.addExpense(expense);
        navigation.goBack();
    };

    const deleteHandler = () => {
        expenseContext.deleteExpense(expense.id);
        navigation.goBack();
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title:
                route.params?.mode === "add" ? "New Expense" : "Edit Expense",
            headerRight: () => {
                if (route.params?.mode !== "add") {
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

    if (editMode) {
        return (
            <ExpenseForm expense={expense} submitHandlerCallback={addHandler} />
        );
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
            <Button onPress={setEditMode(true)} title="Edit" />
        </View>
    );
};

export default ExpenseScreen;
