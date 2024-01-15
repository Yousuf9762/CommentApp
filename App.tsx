import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/Redux/store'
import Home from './src/Screens/Home'



const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Home/>
      </SafeAreaView>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})