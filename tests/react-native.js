import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const red = 'red'

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  used: {
    color: 'blue',
  },
  unused: {
    color: red,
  },
})

export const Test = () => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    <View style={styles.used}>
      <Text>test</Text>
    </View>
  </>
)
