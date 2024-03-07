
import { StyleSheet } from "react-native";
import { appColors } from "../../Utils/Colors/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: appColors.gold,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    textInput: {
        backgroundColor: appColors.white,
        width: '100%',
        height: 45,
        borderRadius: 10,
        padding: 5
    }


})

export default styles;