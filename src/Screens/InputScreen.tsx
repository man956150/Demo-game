import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { connect, ConnectedProps, useDispatch  } from 'react-redux';
import { addWinner } from '../Redux/actions';
import { RootState } from '../Redux/reducer';

const mapState = (state: RootState) => ({
    winners: state.winners,
});

const mapDispatch = {
    addWinner: (name: string) => addWinner(name),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const InputScreen = ({ navigation }: any, props: PropsFromRedux) => {

    const dispatch = useDispatch();

    const [winner1, setWinner1] = useState('');
    const [winner2, setWinner2] = useState('');

    const handleAddWinners = () => {
        dispatch(addWinner([winner1, winner2]));
        // props.addWinner(winner1);
        // props.addWinner(winner2);
        navigation.navigate('Display')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Players</Text>
            <View style={{ marginVertical: 20 }}>
                <Text style={styles.label}>Player 1</Text>
                <View
                    style={[styles.inputContainer, { borderColor: 'black', alignItems: 'center' }]}>
                    <TextInput
                        style={{ flex: 1 }}
                        onChangeText={(e) => setWinner1(e)}
                        value={winner1}
                        placeholder="Ex. Tony Stark"
                    />
                </View>
                <Text style={styles.label}>Player 2</Text>
                <View style={[styles.inputContainer, { borderColor: 'black', alignItems: 'center' }]}>
                    <TextInput
                        style={{ flex: 1 }}
                        onChangeText={(e) => setWinner2(e)}
                        value={winner2}
                        placeholder="Ex. Chris Hemsworth"
                    />
                </View>
                <TouchableOpacity
                    onPress={handleAddWinners}
                    activeOpacity={0.7}
                    style={styles.button}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20
    },
    header: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold'
    },
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

export default connector(InputScreen);