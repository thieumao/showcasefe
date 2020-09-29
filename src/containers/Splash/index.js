import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import "./styles.scss";

const Splash = () => {
  return (
    <p id="container">
      <h1 className="title">Splash</h1>
      <View>
        <Text>Hello, world!</Text>
      </View>
    </p>
  );
};

export default Splash;
