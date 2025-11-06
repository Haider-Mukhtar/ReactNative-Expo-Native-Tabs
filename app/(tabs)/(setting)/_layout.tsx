import Ionicons from "@expo/vector-icons/Ionicons";
import { router, Stack } from "expo-router";
import { TouchableOpacity, View } from "react-native";
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
            headerTransparent: true,
            headerBlurEffect: "none",
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
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                <TouchableOpacity
                  onPress={() => console.log("share")}
                  style={{ padding: 6 }}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                  <Ionicons name="share-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => console.log("bookmark")}
                  style={{ padding: 6 }}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                  <Ionicons name="bookmark-outline" size={24} color="black" />
                </TouchableOpacity>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="modal-screen"
          options={{
            title: "Modal",
            headerLargeTitle: true,
            headerLargeTitleShadowVisible: false,
            headerTransparent: true,
            headerBlurEffect: "none",
            presentation: "formSheet",
            gestureDirection: "vertical",
            animation: "slide_from_bottom",
            sheetGrabberVisible: true,
            sheetInitialDetentIndex: 0,
            sheetAllowedDetents: [0.75],
            sheetCornerRadius: 20,
            sheetExpandsWhenScrolledToEdge: true,
            sheetElevation: 24,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ padding: 6 }}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Ionicons name="close" size={24} color="black" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
