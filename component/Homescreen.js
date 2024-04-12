import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useTailwind } from "tailwind-rn";
import { Image, Text, View } from "react-native";

export default function Homescreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Onbaording1");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  const tailwind = useTailwind();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        gap:10
      }}
    >
      <StatusBar style="auto" />
      <Image
        source={require("../assets/Logo.png")}
        style={{ width: 80, height: 80 }}
      />
      <View>
        <Text style={{fontSize:20, fontWeight:800}}>Snapshot</Text>
      </View>
    </View>
  );
}
