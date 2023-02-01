import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import ITask from "../interfaces/ITask";
import { Stack } from "@react-native-material/core";
import AddTaskComponent from "../components/AddTaskComponent";
import uuid from "react-native-uuid";
import TaskListComponent from "../components/TaskListComponent";

const TasksScreen = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const createTask = (text: string) => {
    const newTask = {
      id: uuid.v4().toString(),
      name: text,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (task: ITask) => {
    setTasks([
      ...tasks.map((t) => {
        if (t.id === task.id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return t;
      }),
    ]);
  };

  const deleteTask = (task: ITask) => {
    setTasks([...tasks.filter((t) => t.id !== task.id)]);
  };

  return (
    <Stack mt={6} justify="start" items="start">
      <AddTaskComponent onAddButtonPressed={createTask} />
      <TaskListComponent
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </Stack>
  );
};

export default TasksScreen;
