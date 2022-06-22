import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// components
import MyText from "../components/UI/MyText";
import { GlobalStyles } from "../constants/styles";

const ExpenseScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={GlobalStyles.spacing1}>
            <MyText>Expense</MyText>
        </View>
    );
};

export default ExpenseScreen;
