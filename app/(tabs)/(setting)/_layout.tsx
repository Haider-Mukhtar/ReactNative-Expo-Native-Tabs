import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingLayout() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: "#FFFFFF"
          }
        }}
      >
        <Stack.Screen
          name="setting"
          options={{
            title: "Settings",
            headerLargeTitle: true,
            headerLargeTitleShadowVisible: false,
            headerBlurEffect: "systemUltraThinMaterial",
          }}
        />
        <Stack.Screen
          name="details"
          options={{
            title: "Details",
            headerLargeTitle: true,
            headerLargeTitleShadowVisible: false,
            headerBlurEffect: "systemUltraThinMaterial",
            headerBackButtonDisplayMode: "minimal",
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
