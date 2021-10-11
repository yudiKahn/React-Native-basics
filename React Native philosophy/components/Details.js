import React, { useState } from 'react';
import * as EL from 'react-native';
import styles from '../files/styles';
import Dropdown from 'react-native-dropdown-picker';
import _thinkers from '../files/thinkers';
import {Thinker, Img} from './Thinker';
import imgs from '../files/path';

function Details(props) {

    const [state, setState] = useState({
        portrait:"", title:"", thinkers:[], thinker:{}
    });
    const {portrait, title, thinkers, thinker} = state;
    const ages = [
        {label: "Antiq", value: "antiq"},
        {label: "Middle Age", value: "middle age"},
        {label: "Modern", value: "modern"},
        {label: "Comtemporary", value: "comtemporary"},
    ]
    const onAgeChange = item => {
        let periods = ages.map(obj=>Object.values(obj)[0].toLowerCase());
        let i = periods.indexOf(item.value.toLowerCase());
        setState({...state, thinkers: _thinkers[i], title: item.value.toUpperCase()});
    }
    const onThinkerClick = (title) => {
        let obj = imgs.filter(obj=> obj.label.toLowerCase() === title.toLowerCase());
        setState({...state, portrait: obj.length === 1 ? obj[0]:"", thinker: obj.length === 1 ? obj[0]:{} });
    }
    const onImgClick = () => props.navigation.navigate('Thinker', {thinker: thinker});

    return (<EL.View style={styles.container}>
        <EL.ImageBackground style={styles.bgImg} source={require('../pics/bg4.jpg')}>
            <EL.Text style={styles.txtShadow}>{title}.</EL.Text>
            <Dropdown items={ages} style={styles.dropdown} dropDownStyle={styles.dropdown} placeholder="Select"
             placeholderStyle={{fontWeight:"bold"}} activeLabelStyle={{color:"red"}} arrowStyle={{marginRight:10}} 
             labelStyle={{fontSize:14, color:"black", width:"90%"}} containerStyle={{height:50}} onChangeItem={onAgeChange}/>

            <EL.FlatList style={{height:200}} keyExtractor={(v,i)=>i.toString()} data={thinkers}
                renderItem={i=>(<Thinker title={i.item.value} tk={i.item.label} portrait={portrait} handleClick={onThinkerClick}/>)}/>

            {portrait?(<EL.TouchableOpacity activeOpacity={.9} onPress={onImgClick}>
                <Img src={portrait.path}/>
            </EL.TouchableOpacity>):null}
        </EL.ImageBackground>
    </EL.View>)
}

export default Details;