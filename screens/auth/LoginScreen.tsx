import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, TextInput, VStack } from "@react-native-material/core";
import { gql, useMutation } from "@apollo/client";
import * as SecureStore from "expo-secure-store";
import { useDispatch } from "react-redux";
import { setToken } from "../../stores/tokenReducer";

export const GET_TOKEN = gql`
  mutation GetToken($password: String!, $email: String!) {
    getToken(password: $password, email: $email)
  }
`;

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const [loadToken] = useMutation(GET_TOKEN, {
    variables: {
      email: email,
      password: password,
    },
    async onCompleted(data) {
      console.log(data.getToken);
      await SecureStore.setItemAsync("token", data.getToken);
      dispatch(setToken(data.getToken));
    },
    onError(error) {
      console.log(error);
    },
  });

  return (
    <VStack>
      <TextInput label="Email" onChange={(e) => setEmail(e.nativeEvent.text)} />
      <TextInput
        label="Mot de passe"
        secureTextEntry
        onChange={(e) => setPassword(e.nativeEvent.text)}
      />
      <Button title={"Se connecter"} onPress={() => loadToken()} />
    </VStack>
  );
};

export default LoginScreen;
