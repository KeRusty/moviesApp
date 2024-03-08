
import { StyleSheet, Dimensions } from "react-native";
import { appColors } from "../../Utils/Colors/colors";

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {

    },
    imageContainer: {
        width: '30%'
    },
    image: {
        width: '100%',
        height: 150,
        marginEnd: 5
    },
    nameContainer: {
        paddingTop: 20,
        paddingHorizontal: 15,
        flexDirection: 'column',
    },
    nameContainerInner: {
        flexDirection: 'row',
    },
    nameText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: appColors.black
    },
    nameTextLower: {
        fontSize: 15,
        fontWeight: 'bold',
        color: appColors.gray
    },
    descriptionContainer: {
        paddingTop: 15,
        paddingHorizontal: 15,
        flexDirection: 'row'
    },
    descriptionTextContainer: {
        width: '70%'
    },
    descriptionText: {
        fontSize: 15,
        color: appColors.gray
    },
    actorsContainer: {
        paddingTop: 15,
        paddingHorizontal: 15,
    },
    actionTextHeading: {
        fontSize: 15,
        fontWeight: 'bold',
        color: appColors.black
    },
    actorsItemsContainer: {
        paddingTop: 8
    },
    actionTextDesc: {
        fontSize: 14,
        fontWeight: 'bold',
        color: appColors.gold
    },
    ratingTextDesc: {
        fontSize: 12,
        color: appColors.black
    },
    ratingTextDescAlt: {
        fontSize: 12,
        color: appColors.gray
    },
    keyWordsMainContainer: {
        flexDirection: 'column',
        marginTop: 10
    },
    keyWordsContainer: {
        marginVertical: 2,

    }

})

export default styles;