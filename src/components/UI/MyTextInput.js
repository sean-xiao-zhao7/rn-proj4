import { TextInput, View } from "react-native";

import MyText from "./MyText";
import { GlobalStyles } from "../../constants/styles";

const MyTextInput = (props) => {
    return (
        <View>
            <MyText>{props.label}</MyText>
            <TextInput
                {...props}
                style={[
                    props.style,
                    {
                        borderWidth: 1,
                        borderColor: GlobalStyles.colors.primary,
                        borderRadius: 3,
                        paddingVertical: 8,
                        paddingHorizontal: 15,
                        fontSize: 18,
                        marginBottom: 10,
                    },
                ]}
            />
        </View>
    );
};

export default MyTextInput;
