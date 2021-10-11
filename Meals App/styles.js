import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const PC = "#008080";
const SC = "#F0F0F3";

const styles =  StyleSheet.create({
    screen:{
        flex:1
    },
    categoryItem:{
        backgroundColor:SC,
        flex:1,
        height:100,
        padding:10,
        margin:8,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        borderRadius:20,
        shadowColor:'black',
        shadowOpacity:.6,
        shadowOffset:{
            width:0, height:2
        },
        shadowRadius:10,
        elevation:3
    },
    mealItem:{
        flex:1,
        margin:8,
        borderRadius:20,
        shadowColor:'black',
        shadowOpacity:.6,
        shadowOffset:{
            width:0, height:2
        },
        shadowRadius:10,
        elevation:3,
        height:Dimensions.get('window').height / 3.5
    },
    mealBgImg:{
        width:"100%",
        height:"100%",
    },
    mealTitle:{
        paddingTop:5,
        paddingLeft:10,
        color:SC,
        fontSize:15,
        maxWidth:'80%',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 1},
        textShadowRadius: 10
    },
    bgPrimary:{
        backgroundColor: PC
    },
    bgSec:{
        backgroundColor:SC
    },
    cSec:{
        color:SC
    },
    cPrimary:{
        color:PC
    },  
    font:{
        fontFamily:'open-sans'
    },
    fontBold:{
        fontFamily:'open-sans-bold'
    },
    row:{
        flexDirection:'row'
    },
    mealDetailsView:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:20
    },
    btn:{
        borderRadius:20,
        shadowColor:'black',
        shadowOpacity:.6,
        shadowOffset:{
            width:0, height:2
        },
        shadowRadius:10,
        elevation:3,
        paddingVertical:10,
        paddingHorizontal:15
    }
});

export default styles;