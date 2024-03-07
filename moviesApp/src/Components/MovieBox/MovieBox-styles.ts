
import { StyleSheet } from "react-native";
import { appColors } from "../../Utils/Colors/colors";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 0.4,
        borderColor: appColors.gray,
        backgroundColor: appColors.white
    },
    titleText: {
        color: appColors.black,
        fontSize: 14,
        fontWeight: '600'
    },
    yearText: {
        color: appColors.gray,
        fontSize: 14,
        fontWeight: '600'
    }

})

export default styles;