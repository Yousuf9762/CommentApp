import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    banner: {
        width: '100%',
        resizeMode: 'contain',
        height: 200
    },
    box: {
        elevation: 3,
        backgroundColor: 'white',
        borderRadius: 4,
        margin: 10,
    },
    boxChild: {
        elevation: 3,
        backgroundColor: 'white',
        borderRadius: 4,
        margin: 10, 
        padding: 10, 
        paddingBottom: 10, 
        marginBottom: 10, 
        marginTop: 10
    },
    rowSpace:{
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    rowEnd:{
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
    rowModalTwoButton:{
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'space-evenly', 
        marginVertical: 20
    },
    borderBottom:{
        borderColor: 'black', 
        borderBottomWidth: 1, 
        paddingBottom: 10, 
        marginBottom: 10 
    },
    dateTimeRight:{
        textAlign: 'right', 
        color: 'black', 
        fontWeight: 'bold'
    },
    commnet:{
        color: 'black', 
        fontStyle: 'italic', 
        fontSize: 16, 
        fontWeight: '400', 
        marginTop: 15
    },
    commentTextButton:{
        marginRight: 10, 
        fontWeight: 'bold'
    },
    commentButton: {
        backgroundColor: '#005750',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        width: 100,
        alignSelf: 'flex-end',
    },
    commentButtonText: {
        color: 'white',
        fontSize: 16
    },


    centeredView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        marginTop: 80,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        paddingTop: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '90%'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderRadius: 10
    },

})