import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../../constants/styles";
import MyText from "./MyText";

const IconButton = (props) => {
    return (
        <Pressable
            onPress={props.onPress}
            style={[
                GlobalStyles.headerRightSpacing1,
                {
                    flexDirection: "row",
                    alignItems: "center",
                },
                props.pressableStyles,
            ]}
        >
            <MaterialIcons
                name={props.name}
                size={32}
                color={props.color ? props.color : "blue"}
                style={props.style}
            />
            {props.label && <MyText>{props.label}</MyText>}
        </Pressable>
    );
};

export default IconButton;
