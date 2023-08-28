import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { connect,ConnectedProps } from 'react-redux';
import { 
  increaseValue, 
  calculateDifference, 
  compareWinners 
} from '../Redux/actions';
import { RootState } from '../Redux/reducer';


const mapState = (state: RootState) => ({
  winners: state.winners,
  values: state.values,
  difference: state.difference,
  comparisonResult: state.comparisonResult,
});

const mapDispatch = {
  increaseValue: (winnerIndex: number) => increaseValue(winnerIndex),
  calculateDifference: () => calculateDifference(),
  compareWinners: () => compareWinners(),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;


const SaveScreen = (props: PropsFromRedux) => {

  const SaveGame = () => {
    props.calculateDifference();
    props.compareWinners();
  };

  return (
    <ScrollView>
      <View>
        {/* Player Winner Points */}
        {props.winners.map((winner, index) => (
          <View key={winner} style={styles.topContain}>
            <View style={styles.topContainer}>
              <Text style={styles.playerName}>{winner}</Text>
              <View>
                <TouchableOpacity style={styles.button1} onPress={() => props.increaseValue(index)} >
                  <Text style={styles.playerButton}>ADD WIN</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View key={index} style={styles.bottomContainer}>
              <Text style={styles.winnerTitle}>Wins  : </Text>
              <Text style={styles.winnerPoint}>{props.values[index]}</Text>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.line} />
        {/* Winner Diff & Win Player */}
        <View style={styles.bottomContain}>
          <View style={styles.winnerLabelContain}>
            <Text style={styles.winnerLabelView}>Win difference :</Text>
            <Text style={styles.winnerLabelView}>Current winner :</Text>
          </View>
          <View style={styles.winnerPlayerContain}>
            <Text style={styles.winnerPlayerView}>{props.difference}</Text>
            <Text style={styles.winnerPlayerView}>{props.comparisonResult}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button2} activeOpacity={0.7} onPress={SaveGame}>
          <Text style={styles.buttonFinalView}>Save Game</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  topContain: {
    marginVertical: 20,
    flexDirection: 'column'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    alignItems: 'center'
  },
  playerName: {
    fontSize: 28,
    fontWeight: '300',
    fontStyle: 'italic',
    color: 'black'
  },
  playerButton: {
    fontSize: 18
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  winnerTitle: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 30,
    color: 'black'
  },
  winnerPoint: {
    alignSelf: 'center',
    marginRight: 40,
    fontSize: 84,
    color: '#4ded30'
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
  button1: {
    height: 55,
    width: '100%',
    paddingHorizontal: 30,
    borderRadius: 24,
    backgroundColor: '#90EE90',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    height: 55,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#e0b0ff',
    marginTop: 50,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 3,
    marginHorizontal: 25,
    backgroundColor: 'brown',
    marginBottom: 20,
  },
  bottomContain: {
    flexDirection: 'row', 
    justifyContent: 'center' 
  },
  winnerLabelContain:{
    justifyContent: 'space-around', 
    flexBasis: '30%'
  },
  winnerLabelView:{
    fontWeight: '600', 
    fontSize: 18, 
    color: 'black' 
  },
  winnerPlayerContain:{
    flexDirection: 'column', 
    justifyContent: 'space-around', 
    flexBasis: '60%'
  },
  winnerPlayerView:{
    alignSelf: 'center', 
    marginTop: 10, 
    fontSize: 34, 
    color: 'black'
  },
  buttonFinalView:{
    fontWeight: '700', 
    fontSize: 24, 
    color: 'white'
  },
})

export default connector(SaveScreen);

