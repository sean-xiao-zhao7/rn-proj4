const { View } = require("react-native");

import MyText from "../components/UI/MyText";
import { GlobalStyles } from "../constants/styles";

const ExpensesSummary = ({ expenses }) => {
    const sum = expenses.reduce((sum, expense) => sum + +expense.amount, 0);

    return (
        <View style={GlobalStyles.bottomSpacing1}>
            <MyText>
                Total: <MyText weight={"bold"}>${sum.toFixed(2)}</MyText>
            </MyText>
        </View>
    );
};

export default ExpensesSummary;
