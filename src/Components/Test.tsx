import { TextInput, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../../assets/css/styles'
import { useDispatch } from 'react-redux'
import { TestComment } from '../Redux/action'


const Test = () => {
    const dispatch=useDispatch()
  return (
    <View>
      <TextInput
                style={styles.input}
                onChangeText={(text)=>dispatch(TestComment(text))}
                placeholder='Your name'
            />
    </View>
  )
}

export default Test
