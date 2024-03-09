import { Dimensions, StyleSheet, Platform } from "react-native";
import { appColors } from "../../Utils/Colors/colors";

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === "ios" ? 90 : 50,
        backgroundColor: appColors.gold,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        width: Dimensions.get('screen').width
    },
    headerContainer: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: appColors.white,
        fontWeight: 'bold',
        fontSize: 20,
        marginStart: Platform.OS === "ios" ? -50 : -55
    },
    backButton: {
        width: '10%',
        marginStart: 10
    }
})

export default styles;
