import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

// components
import MyText from "../components/UI/MyText";

// styles
import { GlobalStyles } from "../constants/styles";
import { pressed } from "../constants/pressed";

const ExpenseDetails = (props) => {
    const navigation = useNavigation();

    const pressHandler = () => {
        navigation.navigate("ExpenseScreen");
    };

    return (
        <View style={GlobalStyles.bottomSpacing1}>
            <Pressable onPress={pressHandler} style={pressed}>
                <MyText>{props.expense.title}</MyText>
                <MyText>{props.expense.duration}</MyText>
                <MyText weight={"bold"}>$ {props.expense.amount}</MyText>
            </Pressable>
        </View>
    );
};

export default ExpenseDetails;
