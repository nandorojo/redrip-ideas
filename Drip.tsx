import { View as NativeView, Button, Text, StyleSheet } from 'react-native'
import React from 'react'
import * as Drip from './src/components'
import useAnimationState from './src/redripify/use-animator'

export default function AnimatedStyleUpdateExample() {
  const from = {
    width: 100,
    height: 100,
    opacity: 0.2,
  }

  const open = {
    width: 300,
    height: 300,
    opacity: 1,
  }

  const box = useAnimationState({
    from,
    open,
  })

  return (
    <NativeView style={styles.container}>
      <Drip.View
        style={styles.box}
        transition={{
          type: 'spring',
        }}
        state={box}
      >
        <Text style={styles.text}>Animator</Text>
      </Drip.View>
      <Drip.View
        style={styles.box}
        animate={{
          opacity: [0, 1],
          scale: [0, 1, 2, 3],
        }}
      >
        <Text style={styles.text}>Style Props</Text>
      </Drip.View>
      <Button
        title="toggle"
        onPress={() => {
          const state = box.current
          if (state === 'open') {
            box.transitionTo('from')
          } else {
            box.transitionTo('open')
          }
        }}
      />
    </NativeView>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    alignSelf: 'center',
    color: 'hotpink',
  },
  box: {
    justifyContent: 'center',
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
})