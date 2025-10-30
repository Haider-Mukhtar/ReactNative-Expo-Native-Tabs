import { Stack } from "expo-router";

export default function ChatLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "#FFFFFF"
        }
      }}
    >
      <Stack.Screen
        name="chat"
        options={{
          title: "Chat",
          headerLargeTitle: true,
          headerLargeTitleShadowVisible: false,
          headerBlurEffect: "systemUltraThinMaterial",
          headerSearchBarOptions: {
            placement: 'integratedButton',
            placeholder: 'Search',
            onChangeText: () => {},
          }
        }}
      />
    </Stack>
  );
}
