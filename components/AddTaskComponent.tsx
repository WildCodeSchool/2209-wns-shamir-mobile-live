import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, Flex, HStack, TextInput } from "@react-native-material/core";

const AddTaskComponent = ({
  onAddButtonPressed,
}: {
  onAddButtonPressed: (text: string) => void;
}) => {
  const [text, setText] = useState<string>("");
  return (
    <HStack spacing={2}>
      <Flex grow={1}>
        <TextInput
          label="Nouvelle tâche"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.nativeEvent.text)}
        />
      </Flex>
      <Button
        title="+"
        onPress={() => {
          onAddButtonPressed(text);
          setText("");
        }}
      />
    </HStack>
  );
};

export default AddTaskComponent;
