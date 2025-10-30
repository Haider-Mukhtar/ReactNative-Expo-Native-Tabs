import { Stack } from "expo-router";

export default function SettingLayout() {
  return (
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
  );
}
