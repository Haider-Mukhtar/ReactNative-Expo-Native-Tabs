import { ScrollView, Text, View } from "react-native";

export default function Index() {
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
  );
}
