import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { connect } from 'react-redux';
// import { updateItem, deleteItem } from '../Redux/actions';

const SaveScreen = ({items}) => {
  return (
    <View>
      {items.map((item) => (
        <View key={item.id} style={{marginTop:20}}>
         <View style={{margin:25,marginBottom:50}}><Text style={{fontSize:24, color:'black' }}>{item.text1}</Text></View>
         <View style={{margin:25,marginBottom:20}}><Text style={{fontSize:24, color:'black' }}>{item.text2}</Text></View>
        </View>
      ))}
    </View>
  )
}

const mapStateToProps = state => ({
  items: state.items,
});

export default connect(mapStateToProps)(SaveScreen);

const styles = StyleSheet.create({})

