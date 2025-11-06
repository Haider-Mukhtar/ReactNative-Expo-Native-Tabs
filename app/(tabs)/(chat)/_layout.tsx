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
          headerTransparent: true,
          headerBlurEffect: "none",
          headerSearchBarOptions: {
            placement: 'integratedButton',
            placeholder: 'Search',
            onChangeText: () => { },
            hideWhenScrolling: true,
          }
        }}
      />
    </Stack>
  );
}
