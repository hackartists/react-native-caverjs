import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const Caver = require('caver-js');
    const caver = new Caver('https://api.baobab.klaytn.net:8651/');
    var text="test";
    var nodeInfo = caver.klay.getNodeInfo().then((result)=>{
        text = result;
    }); 
    return (
        <View style={styles.container}>
          <Text>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
