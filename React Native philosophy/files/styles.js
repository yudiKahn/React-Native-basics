import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column"
    },
    bgImg: {
        flex:1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems:"center"
    },
    txtShadow: {
        textShadowColor: 'rgb(0,0,0)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        fontSize:40, fontWeight:"bold",color:"white",
        textAlign:"center",marginBottom:10
    },
    btn: {
        backgroundColor: 'rgba(70, 48, 235, .9)',
        borderRadius:10, padding:10,
        minWidth:100,
        marginLeft:"auto", marginRight:"auto",
        marginTop:3, marginBottom:3,
    },
    dropdown: {
        width:"90%"
    },item: {
        padding:10, marginVertical:1,
        backgroundColor:"#ccc",
        borderColor:"black",
        borderWidth:1, width:300
    },
    img: {
        width:280, height:280,
        justifyContent:"center", resizeMode:"contain",
        marginVertical:20,
        borderColor:"white", borderWidth:3, 
        /* borderStyle:"solid",
        elevation:20 */
    }
});

export default styles;