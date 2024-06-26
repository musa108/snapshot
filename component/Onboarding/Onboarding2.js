import { StatusBar } from "expo-status-bar";
import { Button, ImageBackground, Text, View } from "react-native";

export default function Onboarding2({navigation}) {
  return (
    <View>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/man-with-bag.png")}
        style={{ width: "100%", height: "100%" }}
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
            Order your Style
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            More than a thousand of our bags are available for your luxury
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
              title="Get Started"
              color="white"
              onPress={() => navigation.navigate("Onbaording3")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
