import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { supabase } from "../lib/superbase";
import { Button, Input, Text } from "react-native-elements";

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signIn({ email, password });

    if (error) {
      Alert.alert(error.message);
    } else {
      navigation.navigate("Home"); // Navigate to HomeScreen on successful sign-in
    }

    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: "font-awesome", name: "envelope" }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize="none"
        />
      </View>
      <View style={{ marginLeft: "auto" }}>
        <Text
          style={{ fontSize: 20, fontWeight: 400 }}
          onPress={() => navigation.navigate("Onbaording2")}
        >
          Forgot Password?
        </Text>
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign in"
          disabled={loading}
          onPress={() => signInWithEmail()}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Text style={{ fontSize: 20, color: "gray" }}>
          Don't Have an Account?
        </Text>
        <Text
          style={{ fontSize: 20, fontWeight:500 }}
          onPress={() => navigation.navigate("SignupPage")}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
