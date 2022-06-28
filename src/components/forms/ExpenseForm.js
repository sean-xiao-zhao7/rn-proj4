import { useState } from "react";
import { View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import IconButton from "../UI/IconButton";
import MyTextInput from "../UI/MyTextInput";

const ExpenseForm = ({ expense, submitHandlerCallback }) => {
    const [state, setState] = useState({
        title: { value: expense.title ? expense.title : "", valid: true },
        duration: {
            value: expense.duration ? expense.duration : "",
            valid: true,
        },
        amount: { value: expense.amount ? expense.amount : "", valid: true },
    });

    const updateState = (type, value) => {
        setState((prevState) => {
            const newState = { ...prevState };
            newState[type].value = value;
            newState[type].valid = true;
            return newState;
        });
    };

    const submitHandler = () => {
        submitHandlerCallback({
            title: state.title.value,
            duration: state.duration.value,
            amount: state.amount.value,
            id: Math.random() + new Date().toDateString(),
        });
    };

    return (
        <View style={GlobalStyles.container1}>
            <MyTextInput
                autoCapitalize={"none"}
                autoCorrect={false}
                onChangeText={updateState.bind(this, "title")}
                value={state.title.value}
                label={"Expense Title"}
            />
            <MyTextInput
                autoCapitalize={"none"}
                autoCorrect={false}
                keyboardType={"numeric"}
                onChangeText={updateState.bind(this, "duration")}
                value={state.duration.value}
                label={"Expense Duration"}
            />
            <MyTextInput
                autoCapitalize={"none"}
                autoCorrect={false}
                keyboardType={"number-pad"}
                onChangeText={updateState.bind(this, "amount")}
                value={state.amount.value}
                label={"Expense Amount"}
            />
            <IconButton
                onPress={submitHandler}
                name={"check"}
                label={"Submit"}
                pressableStyles={{
                    backgroundColor: GlobalStyles.colors.primary,
                    paddingVertical: 8,
                    paddingHorizontal: 25,
                    borderRadius: 25,
                }}
            />
        </View>
    );
};

export default ExpenseForm;
