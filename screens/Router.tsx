import { View, Text } from "react-native";
import React from "react";
import { RootState } from "../stores";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import TasksScreen from "./TasksScreen";
import LoginScreen from "./auth/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Router = () => {
  const token = useSelector((state: RootState) => state.token.jwt);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          <Stack.Screen name="Tasks" component={TasksScreen} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
