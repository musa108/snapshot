import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Onboarding2() {
  return (
    <View>
      <StatusBar style="auto" />
      <Text className="text-4xl" style={{fontSize:20, fontWeight:800}}>Onboarding screen 2</Text>
    </View>
  );
}
