import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addItem } from '../Redux/actions';

const InputScreen = ({ navigation, addItem }:any) => {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const handleAddItem = () => {
        const newItem = { id:Date.now(), text1, text2};
        addItem(newItem);
        setText1('');
        setText2(''),
        navigation.navigate('Display')

    };
    return (
        <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
            <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>Players</Text>
            <View style={{ marginVertical: 20 }}>
                <Text style={styles.label}>Player 1</Text>
                <View
                    style={[styles.inputContainer, { borderColor: 'black', alignItems: 'center' }]}>
                    <TextInput
                        style={{ flex: 1 }}
                        value={text1}
                        onChangeText={(e)=>setText1(e)}
                        placeholder="Ex. Tony Stark"
                    />
                </View>
                <Text style={styles.label}>Player 2</Text>
                <View style={[styles.inputContainer, { borderColor: 'black', alignItems: 'center', }]}>
                    <TextInput
                        style={{ flex: 1 }}
                        value={text2}
                        onChangeText={(e)=>setText2(e)}
                        placeholder="Ex. Chris hemsworth"
                    />
                </View>
                <TouchableOpacity
                    onPress={handleAddItem}
                    activeOpacity={0.7}
                    style={styles.button}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Continue</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default connect(null, { addItem })(InputScreen);

const styles = StyleSheet.create({
    label: {
        color: 'black',
        fontSize: 18,
        marginTop: 15,
    },
    button: {
        height: 55,
        width: '100%',
        borderRadius: 24,
        backgroundColor: 'blue',
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        backgroundColor: 'light',
        borderWidth: 0.5,
        flexDirection: 'row',
        height: 55,
        marginVertical: 10,
        paddingHorizontal: 15,
    },
})