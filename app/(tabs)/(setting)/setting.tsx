import { router } from "expo-router";
import { Switch, Text, TouchableWithoutFeedback, View } from "react-native";
import { GlassView } from 'expo-glass-effect';
import { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Setting() {

  const [isAirplaneMode, setIsAirplaneMode] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 120,
        paddingHorizontal: 16,
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => router.push("/(tabs)/(setting)/details")}
      >
        <GlassView
          style={{
            paddingVertical: 16,
            paddingHorizontal: 20,
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
          glassEffectStyle="clear"
          isInteractive
          tintColor="#99999990"
        >
          <Text
            style={{
              color: "#000000",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Details
          </Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </GlassView>
      </TouchableWithoutFeedback>
      <GlassView
        style={{
          paddingVertical: 16,
          paddingHorizontal: 20,
          borderRadius: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 16,
        }}
        glassEffectStyle="clear"
        isInteractive
        tintColor="#99999990"
      >
        <Text
          style={{
            color: "#000000",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          Notifications
        </Text>
        <Switch
          value={isAirplaneMode}
          onValueChange={setIsAirplaneMode}
        />
      </GlassView>
    </View>
  );
}
