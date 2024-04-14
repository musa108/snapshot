import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "./component/Splash";
import Onboarding1 from "./component/Onboarding/Onboarding1";
import Onboarding2 from "./component/Onboarding/Onboarding2";
import Onboarding3 from "./component/Onboarding/Onboarding3";
import LoginPage from "./page/LoginPage"
import SignupPage from './page/SignupPage'
import Home from './page/Home'

const Stack = createStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ title: "Splash" }}
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
        <Stack.Screen
          name="SignupPage"
          component={SignupPage}
          options={{ title: "SignupPage" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
