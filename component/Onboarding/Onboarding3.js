import { StatusBar } from "expo-status-bar";
import { Button, ImageBackground, View } from "react-native";

export default function Onbaording3({navigation}) {
  return (
    <View>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("../../assets/man-on-jacket.png")}
        style={{ width: "100%", height: "100%",}}
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
              onPress={() => navigation.navigate("LoginPage")}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
