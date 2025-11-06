import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalScreen = () => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        flexGrow: 1
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        {Array.from({ length: 50 }).map((_, i) => (
          <Text key={i}>Item {i + 1}</Text>
        ))}
      </View>
    </ScrollView>
  )
}

export default ModalScreen

const styles = StyleSheet.create({})