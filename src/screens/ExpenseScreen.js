import { useLayoutEffect } from "react";
import { View } from "react-native";

// components
import MyText from "../components/UI/MyText";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/UI/IconButton";

const ExpenseScreen = ({ route, navigation }) => {
    const expense = route.params?.expense;
    const mode = route.params?.mode;

    const deleteHandler = () => {};

    useLayoutEffect(() => {
        navigation.setOptions({
            title: mode === "add" ? "New Expense" : "Edit Expense",
            headerRight: () => {
                return (
                    <IconButton
                        name="delete"
                        onPress={deleteHandler}
                        color="red"
                    />
                );
            },
        });
    }, [navigation]);

    return (
        <View style={GlobalStyles.spacing1}>
            <MyText>Expense</MyText>
        </View>
    );
};

export default ExpenseScreen;
