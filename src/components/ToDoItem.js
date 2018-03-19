import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ToDoItem extends Component {

    render() {
        return ( <Text style={styles.item}>1. Go to store</Text> )
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 10
    }
});