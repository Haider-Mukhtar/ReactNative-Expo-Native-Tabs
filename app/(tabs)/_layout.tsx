import { NativeTabs, Icon, Label, Badge, VectorIcon } from 'expo-router/unstable-native-tabs';

export default function RootLayout() {
  return (
    <NativeTabs
      blurEffect="systemChromeMaterial"
    >
      <NativeTabs.Trigger name="(home)">
        <Label>Home</Label>
        <Icon
          sf={{ default: "house", selected: "house.fill" }}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(chat)">
        <Label>Chat</Label>
        <Icon
          sf={{ default: "message", selected: "message.fill" }}
        />
        <Badge>3</Badge>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(setting)">
        <Label>Setting</Label>
        <Icon
          sf={{ default: "gearshape", selected: "gearshape.fill" }}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
