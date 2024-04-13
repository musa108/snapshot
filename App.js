import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./component/Homescreen";
import Onboarding1 from "./component/Onboarding/Onboarding1";
import Onboarding2 from "./component/Onboarding/Onboarding2";
import Onboarding3 from "./component/Onboarding/Onboarding3";
import LoginPage from "./page/LoginPage"

const Stack = createStackNavigator();

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "home" }}
        />
        <Stack.Screen
          name="Onbaording1"
          component={Onboarding1}
          options={{ title: "onboardng1" }}
        />
        <Stack.Screen
          name="Onbaording2"
          component={Onboarding2}
          options={{ title: "onboardng2" }}
        />
        <Stack.Screen
          name="Onbaording3"
          component={Onboarding3}
          options={{ title: "onboardng3" }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ title: "LoginPage" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </TailwindProvider>
  );
}
