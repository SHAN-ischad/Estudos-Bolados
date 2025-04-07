import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack >
    <Stack.Screen name="index"
      options={{ title: 'Inicial', headerShown: false }} />
    <Stack.Screen name="nova"
      options={{ title: "nova", headerShown: false }} />
  </Stack>;
}
