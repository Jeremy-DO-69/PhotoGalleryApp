import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
//IMAGE CAPTURING STYLES options:
    global: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    align: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

//BUTTON TOOLBAR STYLES options:
    ///Toolbar global styles
    tools: {
        width: winWidth,
        position: 'absolute',
        height: 100,
        bottom: 50,
    },
    ///Capture button no action styles
    butt: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#FFFFFF",
    },
    ///Capture button action styles
    buttAct: {
        width: 80,
        height: 80,
    },
    buttInt: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "blue",
        borderColor: "transparent",
    },

//GALLERY STYLES options:
    ///Gallery Placement styles
    gallerybar: { 
        bottom: 560 
    },
    ///Image border styles
    galleryimgbar: { 
        width: 75, 
        height: 75, 
        marginRight: 5 
    },
    ///Image of the Gallery styles
    galleryimg: { 
        width: 150, 
        height: 150 
    },
});