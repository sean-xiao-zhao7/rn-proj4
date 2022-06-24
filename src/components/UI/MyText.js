import { Text } from "react-native";

// styles
import { GlobalStyles } from "../../constants/styles";

const MyText = ({ children, size, weight, marginBottom }) => {
    let fontSize;
    switch (size) {
        case 1:
            fontSize = GlobalStyles.font1;
            break;
        case 2:
            fontSize = GlobalStyles.font2;
            break;
        case 3:
            fontSize = GlobalStyles.font3;
            break;
        default:
            fontSize = GlobalStyles.font1;
            break;
    }

    let fontWeight;
    switch (weight) {
        case "bold":
            fontWeight = { fontWeight: "bold" };
            break;
        default:
            fontWeight = { fontWeight: "normal" };
            break;
    }

    return (
        <Text style={[fontSize, fontWeight, { marginBottom: 5 }]}>
            {children}
        </Text>
    );
};

export default MyText;
