import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import ITask from "../interfaces/ITask";
import { HStack, Switch } from "@react-native-material/core";

const TaskComponent = ({
  task,
  onToggleTask,
  onDeleteTask,
}: {
  task: ITask;
  onToggleTask: () => void;
  onDeleteTask: () => void;
}) => {
  return (
    <HStack>
      <Switch value={task.done} onValueChange={onToggleTask} />
      <Text>{task.name}</Text>
      <TouchableWithoutFeedback onPress={onDeleteTask}>
        <Text>❌</Text>
      </TouchableWithoutFeedback>
    </HStack>
  );
};

export default TaskComponent;
