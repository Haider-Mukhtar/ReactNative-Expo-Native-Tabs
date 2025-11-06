import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
          backgroundColor: "#FFFFFF",
        }
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
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
