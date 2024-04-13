import { StatusBar } from "expo-status-bar";
import { Button, ImageBackground, Text, View } from "react-native";

export default function Onboarding1({ navigation }) {
  return (
    <View>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/woman-on-jacket.png")}
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            gap: "16px",
            marginLeft: 18,
            marginRight: 18,
            marginTop: 500,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 32,
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            Discover Our New Collection
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            Easy shopping for all your needs just in hand, trusted by millions
            of people in the world.
          </Text>
          <View
            style={{
              textAlign: "centre",
              width: 375,
              height: 40,
              borderRadius: 10,
              backgroundColor: "black",
            }}
          >
            <Button
              title="Next"
              color="white"
              onPress={() => navigation.navigate("Onbaording2")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
