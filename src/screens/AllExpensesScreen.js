import { useContext, useLayoutEffect } from "react";
import { View } from "react-native";

// comps
import ExpensesList from "../components/ExpensesList";

// styles
import { GlobalStyles } from "../constants/styles";

// context
import { ExpenseContext } from "../store/expense-context";

// http
import { fetchExpenses } from "../util/http";

const AllExpensesScreen = () => {
    const expensesContext = useContext(ExpenseContext);
    useLayoutEffect(() => {
        fetchExpenses(expensesContext.setExpenses);
    }, [fetchExpenses]);

    return (
        <View style={GlobalStyles.spacing2}>
            <ExpensesList expenses={expensesContext.expenses} />
        </View>
    );
};

export default AllExpensesScreen;
