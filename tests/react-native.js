// @flow

import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const red = 'red'

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  used: {
    color: 'blue',
  },
  // eslint-disable-next-line react-native/no-unused-styles
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

type Props = $ReadOnly<{|
  message: string,
|}>

export class TestPropTypes extends React.Component<Props> {
  render() {
    return <p>{this.props.message}</p>
  }
}
