import { Text, View } from "react-native";
import { DrawerToggleButtonfile } from "@/components/atons/drawerToggleButton";

export default function Index() {
  return (
    <View className="h-full w-full  items-center ">

      <View className="w-full items-end">
        <DrawerToggleButtonfile />
      </View>
      <View>
        <Text style={{ fontSize: 20 }}> Amém senhor</Text>
      </View >
    </View>
  );
}
