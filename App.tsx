import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [randomBackground, setRandomBackground] = useState('#FFFFFF')

  const genrateColor = () => {
    const hexChars = '0123456789abcdef';

    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexChars.length);
      hexColor += hexChars[randomIndex];
    }

    setRandomBackground(hexColor);
  }
  return (
    <>
      <StatusBar backgroundColor={'#0A79DF'} />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={genrateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.styleBtnText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#1287A5',
    paddingVertical: 12,
    paddingHorizontal: 14
  },
  styleBtnText: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase'
  }
})