import { Dimensions, StyleSheet } from "react-native";
import { appColors } from "../../Utils/Colors/colors";

const styles = StyleSheet.create({
    container: {
        height: 90,
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
        marginStart: -50
    },
    backButton: {
        width: '10%',
        marginStart: 10
    }
})

export default styles;
