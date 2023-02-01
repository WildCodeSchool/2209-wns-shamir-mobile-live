import { View, Text } from "react-native";
import React from "react";
import ITask from "../interfaces/ITask";
import { VStack } from "@react-native-material/core";
import TaskComponent from "./TaskComponent";

const TaskListComponent = ({
  tasks,
  onToggleTask,
  onDeleteTask,
}: {
  tasks: ITask[];
  onToggleTask: (task: ITask) => void;
  onDeleteTask: (task: ITask) => void;
}) => {
  return (
    <VStack>
      {tasks.map((t) => (
        <TaskComponent
          key={t.id}
          task={t}
          onToggleTask={() => onToggleTask(t)}
          onDeleteTask={() => onDeleteTask(t)}
        />
      ))}
    </VStack>
  );
};

export default TaskListComponent;
