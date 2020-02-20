import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NeomorphBox } from 'react-native-neomorph-shadows';

export default function App() {
  return (
    <View style={styles.container}>
      <NeomorphBox
        swapShadowLevel // <- change zIndex of each shadow color
        style={{
          shadowRadius: 10,
          borderRadius: 25,
          backgroundColor: '#efeeee',
          shadowColor: '#cbcaca',
          width: 150,
          height: 150,
        }}
      >
      </NeomorphBox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efeeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
