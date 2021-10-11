import React from 'react';
import * as EL from 'react-native';
import styles from '../files/styles';

function Thinker({tk, title, portrait, handleClick}) {
    return (<EL.TouchableOpacity activeOpacity={0.5} onPress={()=>handleClick(title)}>
        <EL.View style={styles.item}>
            <EL.Text>{title}</EL.Text>
        </EL.View>
    </EL.TouchableOpacity>)
}

function Img({src}){
    return (<EL.View>
        <EL.Image style={styles.img} source={src}/>
    </EL.View>)
}

function Home(props){
    const thinker = props.route.params.thinker;
    return(<EL.ScrollView>
        <EL.View style={{width:styles.img.width,marginLeft:'auto',marginRight:'auto'}}>
            <EL.Text style={styles.txtShadow}>{thinker.label}</EL.Text>
            <EL.Image source={thinker.path} style={styles.img}/>
            <EL.Text style={{fontSize:20,textDecorationLine:'underline',color:'blue'}} onPress={()=> EL.Linking.openURL(thinker.wiki)}>
                Wikipedia
            </EL.Text>
            <EL.Text style={styles.txtShadow}>Quotes :</EL.Text>
            {
                thinker.quotes.map((v,i)=> <EL.Image source={v} key={i} style={styles.img}/>)
            }
        </EL.View>
    </EL.ScrollView>)
}

export { Thinker, Img, Home};