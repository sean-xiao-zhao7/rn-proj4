import { useContext } from "react";
import { View } from "react-native";

import ExpensesList from "../components/ExpensesList";
import { GlobalStyles } from "../constants/styles";
import { ExpenseContext } from "../store/expense-context";

const RecentExpensesScreen = () => {
    const expensesContext = useContext(ExpenseContext);

    return (
        <View style={GlobalStyles.spacing2}>
            <ExpensesList expenses={expensesContext.expenses.slice(0, 3)} />
        </View>
    );
};

export default RecentExpensesScreen;
