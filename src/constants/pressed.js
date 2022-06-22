import { GlobalStyles } from "./styles";

export const pressed = (actions) => {
    if (!actions.pressed) {
        return GlobalStyles.container1;
    } else {
        return [GlobalStyles.container1, { opacity: 0.6 }];
    }
};
