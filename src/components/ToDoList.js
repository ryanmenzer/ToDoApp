import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import ToDoItem from './ToDoItem';

export default class ToDoList extends Component {

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.header}>
              To Do List:
              </Text>
              <View style={styles.content}>
                <ToDoItem />
                <ToDoItem />
                <ToDoItem />
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    header: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });