import React from "react";
import Tabs from "../../navigation/tab";
import Login from "./Login";
import Signup from "./Signup";
import AuthenticationAPI from "../userContext/AuthenticationContext";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function Index() {
  const { login, setLogin } = React.useContext(AuthenticationAPI);
  return login == false ? (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  ) : (
    <Tabs />
  );
}
