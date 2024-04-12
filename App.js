import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./component/Homescreen";
import Onboarding1 from "./component/Onboarding/Onboarding1";
import Onboarding2 from "./component/Onboarding/Onboarding2";

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
      </Stack.Navigator>
    </NavigationContainer>
    </TailwindProvider>
  );
}
