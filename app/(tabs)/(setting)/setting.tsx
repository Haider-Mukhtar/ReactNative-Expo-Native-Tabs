import { router } from "expo-router";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { GlassView } from 'expo-glass-effect';

export default function Setting() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableWithoutFeedback
        onPress={() => router.push("/(tabs)/(setting)/details")}
      >
        <GlassView
          style={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 50,
          }}
          glassEffectStyle="clear"
          isInteractive
          tintColor="#99999990"
        >
          <Text
            style={{
              color: "#000000"
            }}
          >
            Details
          </Text>
        </GlassView>
      </TouchableWithoutFeedback>
    </View>
  );
}
