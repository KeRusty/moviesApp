
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
        backgroundColor: appColors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textContainer: {
        flexDirection: 'column',
        width: '70%'
    },
    movieContainer: {
        flexDirection: 'row',
        alignItems: 'center'
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
    },
    actorsText: {
        color: appColors.gray,
        fontSize: 12,
        fontWeight: '600'
    },
    image: {
        width: 50,
        height: 70,
        marginEnd: 10,
    }

})

export default styles;