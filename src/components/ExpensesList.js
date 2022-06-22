import { FlatList, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

import ExpenseDetails from "./ExpenseDetails";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesList = (props) => {
    return (
        <View style={GlobalStyles.bottomSpacing100}>
            <ExpensesSummary expenses={props.expenses} />
            <FlatList
                data={props.expenses}
                renderItem={(item) => <ExpenseDetails expense={item.item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default ExpensesList;
