//Colors
const color1 = '#3498db';
const color2 = '#EEE9E6';

//Font
export const FontThin = 'Montserrat-Thin';
export const FontLight = 'Montserrat-Light';
export const FontRegular = 'Montserrat-Regular';
export const FontSemiBold = 'Montserrat-SemiBold';
export const FontBold = 'Montserrat-Bold';
export const FontExtraBold = 'Montserrat-ExtraBold';
export const FontBlack = 'Montserrat-Black';
export const FontItalic = 'Montserrat-Italic';

//TAB
export const tabIconDefault = '#ccc';
export const tabIconSelected = '#2f95dc';


//***************************************************

import { StyleSheet, Dimensions, Platform } from 'react-native';

if (Platform.OS === 'ios') {
    TopOffset = 80
    AndroidOffset = 0;
} else {
    TopOffset = 90
    AndroidOffset = 25;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    content:{
        padding: 15,
        
    },
    contentContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    scrollView: {
        padding: 15,
        /*height: Device_Height - 100,*/
    },

    //Header
    header: {
        zIndex: 1,
        backgroundColor: color1,
    },
    headerTitle: {
        fontFamily: FontRegular,
        color: '#FFFFFF',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    headerSubtitle: {
        fontFamily: FontRegular,
        color: '#FFFFFF',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    headerBottom: {
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80,
        backgroundColor: color1,
        paddingTop: 25,
    },
    headerLogo: {
        width: 125,
        height: 50,
        marginTop: 12,
    },
    headerLogoContanier: {
        flex: 1,
        alignSelf: 'center',
        position: 'absolute',
        top: 0,
    },
    headerIcon: {
        color: '#ffffff',
    },

    title: {
        fontFamily: FontRegular,
        fontSize: 22,
    },


    //Picker
    pickerBox: {
        height: 45,
        transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }]
        //fontFamily: FontRegular,
        //justifyContent: 'space-around',
    },

    pickerText: {
        fontFamily: FontRegular,
        fontSize: 14,
        height: 44,
    },

    pickerQta: {
        backgroundColor: '#ecf0f1',
        height: 50,
        paddingLeft: 20,
        fontSize: 16,
        fontFamily: FontRegular,
    },

    pickerPlaceholdelText: {
        fontFamily: FontRegular,
        fontSize: 14,
        lineHeight: 20,
    },

    pickerPlaceholdelTextRequired: {
        fontFamily: FontRegular,
        fontSize: 14,
        color: '#e74c3c',
        lineHeight: 20,
    },

    /* FORM */

    rowInput: {
        flexDirection: 'row',
    },
    rowItem: {
        marginLeft: 0,
        marginTop: 5,
        marginRight: 20,
        flex: 1
    },

    textSmall: {
        fontFamily: FontRegular,
        fontSize: 12,
    },
    textRegular: {
        fontFamily: FontRegular,
        fontSize: 14,
    },
    textBold: {
        fontFamily: FontBold,
        fontSize: 15,
    },
    textButton: {
        fontFamily: FontRegular,
        fontSize: 14,
    },
    textBig: {
        fontFamily: FontRegular,
        fontSize: 14,
        textTransform: 'uppercase'
    },
    textRequired: {
        fontFamily: FontRegular,
        fontSize: 13,
        color: '#e74c3c'
    }

});



export default styles;