import { StyleSheet } from "react-native";
import { appColors } from "../../Utils/Colors/colors";

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: appColors.black,
        borderWidth: 1,
        marginEnd: 8
    },
    text: {
        color: appColors.black,
        fontSize: 13,
        fontWeight: 'bold'
    }
})

export default styles;
