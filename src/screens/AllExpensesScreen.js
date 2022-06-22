import { Text, View } from "react-native";

import ExpensesList from "../components/ExpensesList";

// data
import TestData from "../test-data/test-data";

// style
import { GlobalStyles } from "../constants/styles";

const AllExpensesScreen = () => {
    return (
        <View style={GlobalStyles.spacing2}>
            <ExpensesList expenses={TestData} />
        </View>
    );
};

export default AllExpensesScreen;
