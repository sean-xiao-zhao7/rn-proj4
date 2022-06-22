import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/styles";

const IconButton = (props) => {
    return (
        <Pressable
            onPress={props.onPress}
            style={GlobalStyles.headerRightSpacing1}
        >
            <MaterialIcons
                name={props.name}
                size={32}
                color={props.color ? props.color : "blue"}
                style={props.style}
            />
        </Pressable>
    );
};

export default IconButton;
