import { StyleSheet, Platform } from "react-native";
import { appColors } from "../../Utils/Colors/colors";

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 15
    },
    scroller: {
        alignItems: 'center'
    },
    clearButton: {
        padding: Platform.OS === "ios" ? 3 : 4,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: appColors.black
    }
})

export default styles;
